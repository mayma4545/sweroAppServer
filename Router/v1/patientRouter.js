const express = require("express")
const patientRouter = express.Router()
const patientDB = require("./../../model/patient")

patientRouter.route("/")
    .get(async(req,res)=>{
        try {
            const result = await patientDB.findAll()
            res.json({result})
        } catch (error) {
            console.log(`Error on ${req.baseUrl} ---> ${error}`)
            res.json({error})
        }
    })
    .post(async(req,res)=>{
        try {
            const {
                firstname,
                middlename,
                lastname,
                age
                 } = req.body
                 console.log(req.body)
            await patientDB.create({firstname, middlename, lastname, age})
            res.json({message:"success"})
        } catch (error) {
            console.log(`Error on ${req.baseUrl} ---> ${error}`)
            res.json({error})
        }
    })

patientRouter.route("/search/:id")
    .get(async(req,res)=>{
        try {
            const result = patientDB.findAll({where:{id:req.params.id}})
            res.json({result})
        } catch (error) {
            console.log(`Error on ${req.baseUrl} ---> ${error}`)
            res.json({error})
        }
    })

module.exports = patientRouter