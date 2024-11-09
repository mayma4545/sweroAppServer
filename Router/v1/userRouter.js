const express = require("express")
const userRouter = express.Router()
const userDB = require("./../../model/userDB")
const {Op} = require("sequelize")
userRouter.route("/")
    .post(async(req,res)=>{
        try {
            await userDB.create({username:req.body.username, password: req.body.password})
            res.json({success:true})
        } catch (error) {
            res.json({success:false, error})
        }
    })
userRouter.route("/login/:username")
    .get(async(req,res)=>{
        try {
            const result = await userDB.findAll({where:{username:req.params.username }})
            res.json({result})
        } catch (error) {
            res.json({success:false, error})
        }
    })

module.exports = userRouter