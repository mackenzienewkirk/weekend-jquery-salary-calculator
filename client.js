$(document).ready(readyNow);

let employeeTable = [];

function readyNow() {
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


    let employee = {
    firstName: addedFirstName,
    lastName: addedLastName,
    iDNumber: Number(addedIDNumber),
    jobTitle: addedJobTitle,
    annualSalary: Number(addedAnnualSalary)

    }
}