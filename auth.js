(function () {
    // 1. Check if we are on the login page
    const isLoginPage = window.location.pathname.endsWith('login.html');

    // 2. Check if the user is authenticated
    const isAuthenticated = sessionStorage.getItem('uic_authenticated') === 'true';

    // 3. Logic Flow
    if (!isAuthenticated && !isLoginPage) {
        // Not logged in and not on login page -> Redirect to login
        // Save current location to return after login
        sessionStorage.setItem('uic_redirect_after_login', window.location.href);
        window.location.href = 'login.html';
    } else if (isAuthenticated && isLoginPage) {
        // Already logged in but on login page -> Redirect to home (or saved location)
        const redirectUrl = sessionStorage.getItem('uic_redirect_after_login') || 'index.html';
        window.location.href = redirectUrl;
    }

    // 4. Secure Login Function (SHA-256)
    // Stored Hash for "uic-a11y-2026"
    // Generated via: echo -n "uic-a11y-2026" | openssl dgst -sha256
    const STORED_HASH = "8ed2d98a002b8d0034604a180164c8c764e52e519c72e4242691eb534720972c";

    async function hashString(str) {
        const encoder = new TextEncoder();
        const data = encoder.encode(str);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    // Exposed Login Function (Async now due to crypto)
    // Returns a Promise that resolves to true/false
    window.uicLogin = async function (password) {
        try {
            const inputHash = await hashString(password);

            if (inputHash === STORED_HASH) {
                sessionStorage.setItem('uic_authenticated', 'true');
                const redirectUrl = sessionStorage.getItem('uic_redirect_after_login') || 'index.html';
                window.location.href = redirectUrl;
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.error("Login error:", e);
            return false;
        }
    };
})();
