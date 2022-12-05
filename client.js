$(document).ready(onReady);


let employees = [];

let monthlyCost = 0;
let monthlyCostMax = 20000;

function onReady() {
    console.log("DOM is loaded!");
    // add click event handler that calls the addEmployeeInfo function.
    $('#submitButton').on('click', onSubmit);
    // add click event handler that calls the deleteEmployeeInfo function.
    $('#deleteButton').on('click', renderEmployeeTable);
    renderEmployeeTable();
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
    employees.push(employee);
    console.log(employees);
    renderEmployeeTable()
}

// function addEmployeeInfo() {

    // let addedFirstName = $('#firstNameInput').val()
    // let addedLastName = $('#lastNameInput').val()
    // let addedJobTitle = $('#jobTitleInput').val()
    // let addedIDNumber = $('#iDNumberInput').val()
    // let addedAnnualSalary = $('#annualSalaryInput').val()


//Create an object for each employee to be pushed into the employeeTable array.

    // let employee = {
    //     firstName: addedFirstName,
    //     lastName: addedLastName,
    //     jobTitle: addedJobTitle,
    //     iDNumber: Number(addedIDNumber),
    //     annualSalary: Number(addedAnnualSalary)

    // }
    // employees.push(employee);
    // console.log(employees);

    //Call jQuery to get the value of each input




// function render() {
//     console.log('this is the render function');
//     totalMonthlyCost = 0;
//     $('.employee').empty();
//     for (let i = 0; i < employees.length; i++) {
//         $('.employee').append(`
//         <tr>
//             <td> ${employees[i].firstName}</td>
//             <td>${employees[i].lastName} </td>
//             <td>${employees[i].jobTitle} </td>
//             <td>${employees[i].iDNumber} </td>
//             <td>${employees[i].annualSalary}</td>
//             <button id="submitButton">Submit</button>
//             <td><button class="delete">Delete!</button></td>
//         </tr>
//     `)
//     monthlyCost = employees[i].annualSalary / 12;
//     totalMonthlyCost += monthlyCost;
    
//     deleteEmployeeInfo();
//     monthlyCostMaxFontColor();
// }
// }


function deleteEmployeeInfo() {
    console.log( 'This is to delete employees');
    $(this).parent().parent().remove();

}

function monthlyCostMaxFontColor() {
    console.log('This is to turn the monthly costs over the max red');
    if ( totalMonthlyCost > monthlyCostMax) {
        $('.monthlyCost').css("background-color", "red")
    }
}

