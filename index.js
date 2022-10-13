function createEmployeeRecord(arrayOfEmployeeInformation){
    
    return {
        firstName:  arrayOfEmployeeInformation[0],
        familyName: arrayOfEmployeeInformation[1],
        title: arrayOfEmployeeInformation[2],
        payPerHour: arrayOfEmployeeInformation[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    
}
function createEmployeeRecords(arrayOfArrays){
   return  arrayOfArrays.map(arrayOfEmployeeInformation => createEmployeeRecord(arrayOfEmployeeInformation))
}

function createTimeInEvent(dateStamp){
    
}



    








// Employees always check in and check out.
// Employees always check in and out on the hour.
// The time is represented on a 24-hour clock (1300 is 1:00 pm); this keeps the math easier and is the standard in most of the world.
// When timestamps are needed, they will be provided as Strings in the form: "YYYY-MM-DD 800" or "YYYY-MM-DD 1800" e.g. "2018-01-01 2300".
// Employees will never work across days, e.g., in at 2200 and out at 0400 the next day.