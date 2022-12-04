$(document).ready(onReady);

let employeeTable = [];
let monthlyCost = 0;
let monthlyCostMax = 20000;

function onReady() {
    console.log("DOM is loaded!");
    // add click event handler that calls the addEmployeeInfo function.
    $('#submitButton').on('click', addEmployeeInfo);
    // add click event handler that calls the deleteEmployeeInfo function.
    $('body').on('click','.deleteEmployeeInfo', deleteEmployeeInfo)
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

console.log('Add Employee info to array', addEmployeeInfo());

function addEmployeetoTable() {
    addEmployeeInfo();
    
    render()
}


function render() {
    console.log('this is the render function');
    totalMonthlyCost = 0;
    $('.employee').empty();
    for (let i = 0; i < employeeTable.length; i++) {
        $('.employee').append(`
        <tr>
            <td> ${employeeTable[i].firstName}</td>
            <td>${employeeTable[i].lastName} </td>
            <td>${employeeTable[i].iDNumber} </td>
            <td>${employeeTable[i].jobTitle} </td>
            <td>${employeeTable[i].annualSalary}</td>
            <button id="submitButton">Submit</button>
        </tr>
    `)
    monthlyCost = employeeTable[i].annualSalary / 12;
    totalMonthlyCost += monthlyCost;

}
}

function deleteEmployeeInfo() {
    console.log( 'This is to delete employees');
    $(this).parent().parent().remove();

}

function monthlyCostMaxFontColor() {
    if ( totalMonthlyCost > monthlyCostMax) {
        $('.monthlyCost').css("color", "red")
    }
}

