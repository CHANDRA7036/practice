const employee = {
        name: 'chandra',
        age: 22,
        isActive: true,
    }
    // this object into string stored into a local storage

const employeeObjToString = JSON.stringify(employee);
console.log(typeof employeeObjToString);

localStorage.setItem('employee', 'employeeObjToString');

const toJSONEmployee = JSON.parse(employeeObjToString);
console.log(typeof toJSONEmployee);
console.log(toJSONEmployee.age);