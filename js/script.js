import loadEmployees from './modules/init.js';

const empT = document.querySelector('#employees');
const empC = document.querySelector('#empCount');

async function buildG() {
    try {
        const employees = await loadEmployees();
        empT.innerHTML = '';

        let tbody = document.createElement('tbody');
        for (const employee of employees) {
            tbody.innerHTML += `
        <tr>
            <td>${employee.employeeID}</td>
            <td>${employee.fullName}</td>
            <td>${employee.extension}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `;
        }
        empT.appendChild(tbody);
        empC.textContent = `(${employees.length})`;
    } catch (error) {
        console.error('Error fetching employee data: ', error);
    }
}

buildG();

empT.addEventListener('click', (e) => {

});