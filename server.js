const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const EmployeeModel = require('./models/Employee.js')
const ProjectModel = require('./models/Project.js')
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://praveenndj:IPAMSdb@ipamspraveenndj.jxfn1zi.mongodb.net/IPAMS?retryWrites=true&w=majority')
.then(()=>{console.log('Connected to Atlas')})
.catch((err)=>{console.log(err)})

//Employees Server Files

app.get("/getemployee", (req,res) => {
    EmployeeModel.find()
    .then(e => res.json(e))
    .catch(err => res.json(err))
})

app.get("/getemployeeById/:id", (req,res) => {
    const id = req.params.id;
    EmployeeModel.findById({_id:id})
    .then(e => res.json(e))
    .catch(err => res.json(err))
})

app.post("/addemployee",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(e => res.json(e))
    .catch((err)=> res.json(err))
})

app.put("/updateemployee/:id",(req,res)=>{
    const id = req.params.id;
    EmployeeModel.findByIdAndUpdate({_id:id},{
        e_id : req.body.e_id, 
        firstName:req.body.firstName, 
        lastName:req.body.lastName, 
        age:req.body.age, 
        designation:req.body.designation, 
        department:req.body.department, 
        experience:req.body.experience, 
        dateOfJoining:req.body.dateOfJoining, 
        address:req.body.address})
        .then(e => res.json(e))
        .catch((err)=> res.json(err))       
})

app.delete("/deleteemployee/:id", (req,res)=>{
    const id = req.params.id;
    EmployeeModel.findByIdAndDelete({_id:id})
    .then(e => res.json(e))
    .catch((err)=> res.json(err))
})

//Projects Server Files

app.get("/getproject", (req,res) => {
    ProjectModel.find()
    .then(e => res.json(e))
    .catch(err => res.json(err))
})

app.get("/getprojectById/:id", (req,res) => {
    const id = req.params.id;
    ProjectModel.findById({_id:id})
    .then(e => res.json(e))
    .catch(err => res.json(err))
})

app.post("/addproject",(req,res)=>{
    ProjectModel.create(req.body)
    .then(e => res.json(e))
    .catch((err)=> res.json(err))
})

app.put("/updateproject/:id",(req,res)=>{
    const id = req.params.id;
    ProjectModel.findByIdAndUpdate({_id:id},{
        prj_id : req.body.prj_id,
        prjTitle : req.body.prjTitle,
        prjClient : req.body.prjClient,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        teamSize : req.body.teamSize,
        department : req.body.department,
        technologyUsed : req.body.technologyUsed,
        status : req.body.status})
        .then(e => res.json(e))
        .catch((err)=> res.json(err))       
})

app.delete("/deleteproject/:id", (req,res)=>{
    const id = req.params.id;
    ProjectModel.findByIdAndDelete({_id:id})
    .then(e => res.json(e))
    .catch((err)=> res.json(err))
})

app.listen(3001, ()=> {
    console.log('Server is running');
})