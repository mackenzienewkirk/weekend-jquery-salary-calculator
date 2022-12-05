$(document).ready(onReady);


let employees = [];

function onReady() {
    renderEmployeeTable();
    renderTotalMonthlySalary();
    console.log("DOM is loaded!");
    // add click event handler that calls the addEmployeeInfo function.
    $('#submitButton').on('click', onSubmit);
    // add click event handler that calls the deleteEmployeeInfo function.
    $('body').on('click', '.deleteButton', deleteEmployee);
}

function renderEmployeeTable() {
    //Clear out current content on the table.
    //Loop through the employees array
    //Append a <tr></tr> containing employee data to the DOM
    console.log('called renderEmployeeTable');
    $('#employeeRows').empty();
    for (let employee of employees) {
        $('#employeeRows').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName} </td>
            <td>${employee.jobTitle} </td>
            <td>${employee.iDNumber} </td>
            <td>${employee.annualSalary}</td>
            <button id="submitButton">Submit</button>
            <td><button class="delete">Delete!</button></td>
        </tr>
            `)
    }
}

function onSubmit() {
    console.log('The submit button');
    let addedFirstName = $('#firstNameInput').val()
    let addedLastName = $('#lastNameInput').val()
    let addedJobTitle = $('#jobTitleInput').val()
    let addedIDNumber = $('#iDNumberInput').val()
    let addedAnnualSalary = $('#annualSalaryInput').val()

    let employee = {
        firstName: addedFirstName,
        lastName: addedLastName,
        jobTitle: addedJobTitle,
        iDNumber: Number(addedIDNumber),
        annualSalary: Number(addedAnnualSalary)

    }

    $('input').val('');

    employees.push(employee);
    console.log(employees);
    renderEmployeeTable()
}

function renderTotalMonthlySalary() {
    let annualTotalSalary = 0;
    for (let employee of employees) {
        annualTotalSalary += employee.annualSalary;
    }
    let totalMonthlySalary = annualTotalSalary / 12;

    if (totalMonthlySalary > 20000) {
        $('#monthlyTotal').addClass('overBudgetText')
    }
    $('#monthlyTotalText').text(totalMonthlySalary);
}

function deleteEmployee() {
    console.log( 'This is to delete employees');
    $(this).parent().parent().remove();

}
