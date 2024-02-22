const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    e_id : String,
    firstName : String,
    lastName : String,
    age : Number,
    designation : String,
    department : String,
    experience : Number,
    dateOfJoining : Date,
    address : String
});

const EmployeeModel = mongoose.model('employees',employeeSchema);
module.exports = EmployeeModel;