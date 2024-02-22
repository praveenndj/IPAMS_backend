const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
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

const ReportModel = mongoose.model('reports',reportSchema);
module.exports = ReportModel;