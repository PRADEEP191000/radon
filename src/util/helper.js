const printDate = function() {
    let currentDate = new Date()
    console.log(currentDate)

}
const printMonth = function() {
    const a = new Date()
    const m = a.getMonth() + 1
    console.log("current month is " + m)
}


// const Month = function() {
//     let newdate = currentDate;
//     let currentMonth = currentDate.getMonth()
//     console.log(currentMonth)
// }

module.exports.printDate = printDate
module.exports.printMonth = printMonth
    // module.exports.log = log