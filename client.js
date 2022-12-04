$(document).ready(readyNow);

let employeeTable = [];

function readyNow() {
    render()
    console.log("DOM is loaded!");
    // add click event handler that calls the addEmployeeInfo function.
    $('submitButton').on('click', addEmployeeInfo);
}

function addEmployeeInfo() {

    let addedFirstName = $('#firstNameInput').val()
    let addedLastName = $('#lastNameInput').val()
    let addedIDNumber = $('#iDNumberInput').val()
    let addedJobTitle = $('#jobTitleInput').val()
    let addedAnnualSalary = $('#annualSalaryInput').val()

//Create an object for each employee to be pushed into the employeeTable array.

    let employee = {
        firstName: addedFirstName,
        lastName: addedLastName,
        iDNumber: Number(addedIDNumber),
        jobTitle: addedJobTitle,
        annualSalary: Number(addedAnnualSalary)

    }
    employeeTable.push(employee);
    console.log(employeeTable);

    //Call jQuery to get the value of each input

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
    
    render()
}

console.log('Add Employees to Employee Table', employeeTable);


function render() {
    $('#employee').empty();
    for (let i = 0; i < employeeTable.length; i++) {
        $('#employee').append(`
        <li>
        <span class= "employeeSpan">${employeeTable[i].firstName}</span>: ${employeeTable[i].lastName} ${employeeTable[i].iDNumber} ${employeeTable[i].jobTitle} ${employeeTable[i].annualSalary}
        <button class="delete" >Delete</button>
        </li>
        `)
}
}