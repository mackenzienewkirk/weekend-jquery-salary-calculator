$(document).ready(readyNow);

let employeeTable = [];

function readyNow() {
    render()
    console.log("DOM is loaded!");
    // add click event handler that calls the addEmployeeInfo function.
    $('').on('click', addEmployeeInfo);
}

function addEmployeeInfo() {

    let addedFirstName = $('#firstNameInput').val()
    let addedLastName = $('#lastNameInput').val()
    let addedIDNumber = $('#iDNumberInput').val()
    let addedJobTitle = $('#jobTitleInput').val()
    let addedAnnualSalary = $('#annualSalaryInput').val()

//Create an object for each employee to be pushed into the emplyeeTable array.

    let employee = {
        firstName: addedFirstName,
        lastName: addedLastName,
        iDNumber: Number(addedIDNumber),
        jobTitle: addedJobTitle,
        annualSalary: Number(addedAnnualSalary)

    }
    employeeTable.push(employee);
    render();

    //Call jQuery to get the value of each input

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
    
}

