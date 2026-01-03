const roles = [
    { id: 'director', title: 'Director of Digital Accessibility' },
    { id: 'asst-dir-services', title: 'Assistant Director of Digital Accessibility Services' },
    { id: 'asst-dir-eng', title: 'Assistant Director of Digital Accessibility Engineering' }
];

const tasks = [
    {
        activity: 'Policy Creation & Updates',
        raci: {
            'director': 'A',
            'asst-dir-services': 'C',
            'asst-dir-eng': 'C'
        }
    },
    {
        activity: 'Automated Compliance Reporting (Axe/Deque)',
        raci: {
            'director': 'I',
            'asst-dir-services': 'I',
            'asst-dir-eng': 'A/R'
        }
    },
    {
        activity: 'Manual Accessibility Testing',
        raci: {
            'director': 'I',
            'asst-dir-services': 'R',
            'asst-dir-eng': 'A/C'
        }
    },
    {
        activity: 'Training & Workshops',
        raci: {
            'director': 'I',
            'asst-dir-services': 'A/R',
            'asst-dir-eng': 'C'
        }
    },
    {
        activity: 'Remediation Consultation',
        raci: {
            'director': 'I',
            'asst-dir-services': 'R',
            'asst-dir-eng': 'A/C'
        }
    },
    {
        activity: 'Exception Request Review',
        raci: {
            'director': 'A',
            'asst-dir-services': 'R',
            'asst-dir-eng': 'R'
        }
    },
    {
        activity: 'Tool/Platform Procurement Review',
        raci: {
            'director': 'A',
            'asst-dir-services': 'C',
            'asst-dir-eng': 'R'
        }
    }
];

function initChart() {
    const tableHeadRow = document.querySelector('#raci-table thead tr');
    const tableBody = document.querySelector('#raci-table tbody');

    // 1. Render Header Columns
    roles.forEach(role => {
        const th = document.createElement('th');
        th.textContent = role.title;
        tableHeadRow.appendChild(th);
    });

    // 2. Render Body Rows
    tasks.forEach(task => {
        const tr = document.createElement('tr');
        
        // Task Name
        const tdTask = document.createElement('td');
        tdTask.textContent = task.activity;
        tr.appendChild(tdTask);

        // Role Values
        roles.forEach(role => {
            const td = document.createElement('td');
            const letters = (task.raci[role.id] || '-').split('/'); // Handle "A/R" etc.
            
            // Create badges for each letter
            letters.forEach(letter => {
                if (letter === '-') {
                    td.innerHTML += '<span style="color: #ccc;">&mdash;</span>'; // Em dash for empty
                } else {
                    const span = document.createElement('span');
                    span.classList.add('raci-cell');
                    span.classList.add(`role-${letter.toLowerCase()}`);
                    span.textContent = letter;
                    td.appendChild(span);
                    // Add small space if multiple
                    td.appendChild(document.createTextNode(' ')); 
                }
            });
            
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', initChart);
