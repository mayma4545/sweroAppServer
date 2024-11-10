const express = require("express")
const alertoRoute = express.Router()
const alertoDB = require("./../../model/alertoDB")
const {Sequelize, Op} = require("sequelize")
alertoRoute.route("/")
    .get(async(req,res)=>{
        try {
            const result = await alertoDB.sequelize.query(`SELECT * FROM alertos WHERE id IN ( SELECT MIN(id) FROM alertos GROUP BY patientFirstname, patientLastname);`)
            res.json({result})
        } catch (error) {
            console.log(error)
            res.json({error})
        }
    })
    .post(async(req,res)=>{
        try {
            const {
                sweroVolume,
                totalDrops,
  timeToRun,
  dropFactor,
  calculatedDpm,
  totalDropNeeded,
  userEmployee,
  patientId,
  sweroName,
  sweroSize,
  sweroType,
  patientFirstname,
  patientMiddlename,
  patientLastname,
  endTime,
  startTime,
  device,
  
            } = req.body 
            console.log(req.body)
            await alertoDB.create({sweroVolume, timeToRun, dropFactor, calculatedDpm, totalDropNeeded, userEmployee, patientId,
                                   sweroName, sweroSize, sweroType, patientFirstname, patientMiddlename, patientLastname, startTime,endTime,
                                   totalDrops, sweroVolume, device,sweroType
            })
            res.json({success:true})
        } catch (error) {
            console.log(error)
        }
    })
alertoRoute.route("/group/:patientFirstname/:patientMiddlename/:patientLastname")
    .get(async(req,res)=>{
        try {
            const result = await alertoDB.findAll({where:{
                [Op.and]: [
                    {patientFirstname: req.params.patientFirstname},
                    {patientLastname: req.params.patientLastname},
                    {patientMiddlename: req.params.patientMiddlename}
            
                ]
            }})
            res.json({result})
        } catch (error) {
            console.log(error)
            res.json({error})
        }
    })
module.exports = alertoRoute