const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    prj_id : String,
    prjTitle : String,
    prjClient : String,
    startDate : Date,
    endDate : Date,
    teamSize : Number,
    department : String,
    technologyUsed : String,
    status : String
});

const ProjectModel = mongoose.model('projects',projectSchema);
module.exports = ProjectModel;