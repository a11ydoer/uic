const roles = [
    { id: 'jemma', title: 'Jemma' },
    { id: 'helen', title: 'Helen' },
    { id: 'blake', title: 'Blake' },
    { id: 'chris-a', title: 'Chris A' },
    { id: 'michael', title: 'Michael' },
    { id: 'michelle', title: 'Michelle' },
    { id: 'dylan', title: 'Dylan' },
    { id: 'chris-k', title: 'Christopher K' },
    { id: 'trey', title: 'Trey' },
    { id: 'lucy', title: 'Lucy' },
    { id: 'brother-j', title: 'Brother J' },
    { id: 'stefin', title: 'Stefin' }
];

const tasks = [
    {
        activity: 'Accessibility Training and Consultation Services',
        raci: { 'jemma': 'C', 'helen': 'A', 'blake': 'C', 'chris-a': 'I', 'michael': 'R', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'R', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Equalify Accessibility Platform',
        raci: { 'jemma': 'A', 'helen': 'C', 'blake': 'A/R', 'chris-a': 'R', 'michael': 'C', 'michelle': 'I', 'dylan': 'R', 'chris-k': 'R', 'trey': 'R', 'lucy': 'R', 'brother-j': 'R', 'stefin': 'I' }
    },
    {
        activity: 'Equalify Transition and Training',
        raci: { 'jemma': 'A/R', 'helen': 'R', 'blake': 'R', 'chris-a': 'C', 'michael': 'R', 'michelle': 'I', 'dylan': 'C', 'chris-k': 'C', 'trey': 'C', 'lucy': 'R', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'UIC Open Source Fund',
        raci: { 'jemma': 'A', 'helen': 'C', 'blake': 'A', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'R' }
    },
    {
        activity: 'ADA Title II Preparation',
        raci: { 'jemma': 'A/R', 'helen': 'R', 'blake': 'R', 'chris-a': 'C', 'michael': 'C', 'michelle': 'I', 'dylan': 'C', 'chris-k': 'C', 'trey': 'C', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'AI Literacy',
        raci: { 'jemma': 'A', 'helen': 'C', 'blake': 'A', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'R' }
    },
    {
        activity: 'Accessibility Outreach',
        raci: { 'jemma': 'C', 'helen': 'A', 'blake': 'C', 'chris-a': 'I', 'michael': 'R', 'michelle': 'R', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Accessibility Outreach Beyond UIC',
        raci: { 'jemma': 'A', 'helen': 'C', 'blake': 'R', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'R' }
    },
    {
        activity: 'Accessibility Resources and Tools',
        raci: { 'jemma': 'I', 'helen': 'A', 'blake': 'R', 'chris-a': 'I', 'michael': 'C', 'michelle': 'I', 'dylan': 'C', 'chris-k': 'C', 'trey': 'C', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Equalify Reflow (AI PDF Converter)',
        raci: { 'jemma': 'I', 'helen': 'I', 'blake': 'R', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'R', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Equalify Roadmap',
        raci: { 'jemma': 'R', 'helen': 'C', 'blake': 'R', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Equalify Manual testing',
        raci: { 'jemma': 'I', 'helen': 'C', 'blake': 'A', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'R', 'trey': 'I', 'lucy': 'R', 'brother-j': 'R', 'stefin': 'I' }
    },
    {
        activity: 'UIC Accessibility Maturity Model',
        raci: { 'jemma': 'R', 'helen': 'C', 'blake': 'I', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'R', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'UIC Accessibility Report',
        raci: { 'jemma': 'C', 'helen': 'R', 'blake': 'I', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'DASE Team Support',
        raci: { 'jemma': 'I', 'helen': 'A', 'blake': 'I', 'chris-a': 'I', 'michael': 'I', 'michelle': 'R', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Equalify Infrastructure',
        raci: { 'jemma': 'I', 'helen': 'C', 'blake': 'C', 'chris-a': 'R', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Exception Review Process',
        raci: { 'jemma': 'A', 'helen': 'R', 'blake': 'C', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Stakeholder Management',
        raci: { 'jemma': 'A', 'helen': 'I', 'blake': 'I', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Budget Planning',
        raci: { 'jemma': 'A', 'helen': 'I', 'blake': 'I', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Accessibility Technology Procurement',
        raci: { 'jemma': 'C', 'helen': 'R', 'blake': 'C', 'chris-a': 'I', 'michael': 'I', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Accessibility Evaluation',
        raci: { 'jemma': 'I', 'helen': 'R', 'blake': 'I', 'chris-a': 'I', 'michael': 'R', 'michelle': 'I', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'R', 'brother-j': 'R', 'stefin': 'I' }
    },
    {
        activity: 'Scheduling Team Meetings',
        raci: { 'jemma': '', 'helen': 'I', 'blake': 'I', 'chris-a': 'I', 'michael': 'I', 'michelle': 'R', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'I' }
    },
    {
        activity: 'Managing the Engineering Team and Open Source Fund Communication',
        raci: { 'jemma': 'C', 'helen': 'I', 'blake': 'C', 'chris-a': 'I', 'michael': 'I', 'michelle': 'R', 'dylan': 'I', 'chris-k': 'I', 'trey': 'I', 'lucy': 'I', 'brother-j': 'I', 'stefin': 'C' }
    }
];

function initChart() {
    renderRoleCards();
}

function renderRoleCards() {
    const container = document.querySelector('#role-cards-container');
    container.innerHTML = '';

    roles.forEach(role => {
        // Create Card
        const card = document.createElement('article');
        card.classList.add('role-card');

        // Header
        const header = document.createElement('div');
        header.classList.add('role-card-header');
        header.innerHTML = `<h3>${role.title}</h3>`;
        card.appendChild(header);

        // Body
        const body = document.createElement('div');
        body.classList.add('role-card-body');

        // Categories (A, R, C, I)
        const categories = [
            { code: 'A', label: 'Accountable' },
            { code: 'R', label: 'Responsible' },
            { code: 'C', label: 'Consulted' },
            { code: 'I', label: 'Informed' }
        ];

        categories.forEach(cat => {
            // Find tasks for this category
            const assignedTasks = tasks.filter(task => {
                const val = task.raci[role.id];
                return val && val.includes(cat.code);
            }).sort((a, b) => a.activity.localeCompare(b.activity));

            if (assignedTasks.length > 0) {
                const group = document.createElement('div');
                group.classList.add('raci-group');

                const groupTitle = document.createElement('h4');
                groupTitle.innerHTML = `<span class="badge role-${cat.code.toLowerCase()}">${cat.code}</span> ${cat.label}`;
                group.appendChild(groupTitle);

                const ul = document.createElement('ul');
                assignedTasks.forEach(t => {
                    const li = document.createElement('li');
                    li.textContent = t.activity;
                    ul.appendChild(li);
                });
                group.appendChild(ul);
                body.appendChild(group);
            }
        });

        // If no tasks found at all
        if (body.children.length === 0) {
            body.innerHTML = '<p style="color: #888; font-style: italic;">No specific RACI assignments.</p>';
        }

        card.appendChild(body);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initChart);
