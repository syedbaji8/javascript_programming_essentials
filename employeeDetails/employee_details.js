const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    //... More employee records can be added here
];

function displayEmployees() {
    const renderEmployees = employees.map((employee, index) => {
        return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    }).join('');
    document.getElementById('employeesDetails').innerHTML = renderEmployees;
}


function calculateTotalSalaries() {
    const salariesTotal = employees.reduce((acc, current) => {
        acc += current.salary;
        return acc;
    }, 0);
    alert(`Total Salaries is: ${salariesTotal}`)
}

function displayHREmployees() {
    const hrEmployees = employees.filter((item, index) => {
        return item.department === 'HR';
    }).map((employee, index) => {
        return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    }).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployees;
}

function findEmployeeById(id) {
    const employeeById = employees.find((item, index) => {
        return item.id === id;
    })
    if (employeeById) {
        const renderemp = [employeeById].map((employee, index) => {
            return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        }).join('');
        document.getElementById('employeesDetails').innerHTML = renderemp;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}


function findEmployeeBySpecialization() {
    const reqSpecialization = prompt('Which specialization you want ?');
    if (reqSpecialization) {
        const foundSpEmployee = employees.find((item, index) => {
            return item.specialization.toLowerCase() === reqSpecialization.toLowerCase()
        });
        if (foundSpEmployee) {
            const renderSpEmployee = [foundSpEmployee].map((employee, index) => {
                return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
            }).join();
            document.getElementById('employeesDetails').innerHTML = renderSpEmployee;
        } else {
            document.getElementById('employeesDetails').innerHTML = 'Employee not found with that specialization';
        }
    }
}