async function loadEmployees() {
    const response = await fetch('data/employees.json');
    if (!response.ok) {
        throw new Error('Failed to load employee data.');
    }
    return await response.json();
}

export default loadEmployees;