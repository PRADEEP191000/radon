var mongoose = require('mongoose');
var employeesSchema = new mongoose.Schema({
    name: string,
    email: string,
    hourlyrate: Number,
    totalHours: Number,
});
var employeeModel = mongoose.model('employee', employeesSchema);
var employees = new employeeModel({
    name: "Pradeep",
    email: "pradeepgupta191000@gmail.com",
    hourlyrate: 300,
    totalHours: 8,
});
console.log(employees);