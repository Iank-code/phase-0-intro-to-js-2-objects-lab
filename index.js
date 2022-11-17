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



// does not modify the 
// original employee (it is non-destructive)
// and also
// deletes `key` from a clone of employee and 
// returns the new employee (it is non-destructive)

function deleteFromEmployeeByKey(employee, key){
    const remEmployee = { ...employee }
    let name = key
    let newEmployee = delete remEmployee[name]
    return {newEmployee}
}
deleteFromEmployeeByKey(employee, "John")




function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee }
    // newObj.name = key
    // newObj["streetAddress"] = value
    return {newObj}
}
destructivelyUpdateEmployeeWithKeyAndValue(...employee, "Sam", "12 Broadway")

// const newEmployee = nondestructivelyUpdateObject(
//     tuesdayMenu,
//     "Sam",
//     "12 Broadway"
// );

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const remEmployee = { ...employee }
    remEmployee.name = undefined
    return {remEmployee{}
}
destructivelyDeleteFromEmployeeByKey(employee, "Sam")