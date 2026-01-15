function initOKR() {
    renderOKRCards();
}

function renderOKRCards() {
    const container = document.getElementById('okr-container');
    if (!container) return; // Guard clause

    container.innerHTML = ''; // Clear existing content

    tacticalObjectives.forEach(obj => {
        // Create Objective Card
        const card = document.createElement('div');
        card.classList.add('objective-card');

        // Card Title
        const title = document.createElement('h3');
        title.textContent = obj.title;
        card.appendChild(title);

        // Optional Subtitle
        if (obj.subtitle) {
            const subtitle = document.createElement('h4');
            subtitle.textContent = obj.subtitle;
            subtitle.style.fontSize = '0.9rem';
            subtitle.style.color = '#666';
            subtitle.style.marginTop = '-0.5rem';
            subtitle.style.marginBottom = '1rem';
            card.appendChild(subtitle);
        }

        // Render Key Results
        obj.keyResults.forEach(kr => {
            const krDiv = document.createElement('div');
            krDiv.classList.add('key-result');

            // Header (Label + Metric)
            const header = document.createElement('div');
            header.classList.add('kr-header');

            const labelSpan = document.createElement('span');
            labelSpan.textContent = kr.label;

            const metricSpan = document.createElement('span');
            metricSpan.classList.add('kr-metric');
            metricSpan.textContent = kr.metric;

            header.appendChild(labelSpan);
            header.appendChild(metricSpan);

            // Progress Bar
            const progContainer = document.createElement('div');
            progContainer.classList.add('progress-bar-container');
            progContainer.setAttribute('role', 'progressbar');
            progContainer.setAttribute('aria-valuenow', kr.currentValue);
            progContainer.setAttribute('aria-valuemin', '0');
            progContainer.setAttribute('aria-valuemax', '100');
            if (kr.ariaLabel) {
                progContainer.setAttribute('aria-label', kr.ariaLabel);
            }

            const progFill = document.createElement('div');
            progFill.classList.add('progress-bar-fill');
            if (kr.status) {
                progFill.classList.add(kr.status);
            }
            // Set width after a slight delay for transition effect, or immediately
            setTimeout(() => {
                progFill.style.width = `${kr.currentValue}%`;
            }, 100);

            progContainer.appendChild(progFill);

            // Assemble Key Result
            krDiv.appendChild(header);
            krDiv.appendChild(progContainer);

            card.appendChild(krDiv);
        });

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initOKR);
