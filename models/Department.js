const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    d_id : Number,
    departmentName : String,
    departmentHead : String,
    noOfEmployees : Number,
    location : String,
    noOfProjects : Number
});

const DepartmentModel = mongoose.model('departments',departmentSchema);
module.exports = DepartmentModel;