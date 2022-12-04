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

//A function to add the employees into the employeeTable array//

function addEmployeeInfo() {

    let addedFirstName = $('#firstNameInput').val()
    let addedLastName = $('#lastNameInput').val()
    let addedJobTitle = $('#jobTitleInput').val()
    let addedIDNumber = $('#iDNumberInput').val()
    let addedAnnualSalary = $('#annualSalaryInput').val()


//Create an object for each employee to be pushed into the employeeTable array.

    let employee = {
        firstName: addedFirstName,
        lastName: addedLastName,
        jobTitle: addedJobTitle,
        iDNumber: Number(addedIDNumber),
        annualSalary: Number(addedAnnualSalary)

    }
    employeeTable.push(employee);
    console.log(employeeTable);

    //Call jQuery to get the value of each input

    render()
}



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
            <td>${employeeTable[i].jobTitle} </td>
            <td>${employeeTable[i].iDNumber} </td>
            <td>${employeeTable[i].annualSalary}</td>
            <button id="submitButton">Submit</button>
            <td><button class="delete">Delete!</button></td>
        </tr>
    `)
    monthlyCost = employeeTable[i].annualSalary / 12;
    totalMonthlyCost += monthlyCost;
    
    deleteEmployeeInfo();
    monthlyCostMaxFontColor();
}
}


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

