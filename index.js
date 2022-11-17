// Write your solution in this file!

const employee = {
    name: "Ian",
    streetAddress: "35488825",
}

// returns an employee with the original key value 
// pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee, key, value){

    const newObj = { ...employee }
    newObj[key] = value
    return newObj

}
updateEmployeeWithKeyAndValue(employee, "sam", "1")



// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee.name = key
//     employee.streetAddress = value
//     return employee
// }
// destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "12 Broadway")

// const newEmployee = nondestructivelyUpdateObject(
//     tuesdayMenu,
//     "Sam",
//     "12 Broadway"
// );



// Dont know exactly what it does
function deleteFromEmployeeByKey(employee, key){
    const remEmployee = { ...employee }
    let newEmployee = delete remEmployee[key]
    return newEmployee
}
deleteFromEmployeeByKey(employee, "John")