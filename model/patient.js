const db = require("./../model/db")
const {DataTypes} = require("sequelize")

const patientDB = db.define("patient",{
    firstname:{
        type:DataTypes.STRING,
        allownull:false
    },
    middlename:{
        type:DataTypes.STRING,
        allownull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allownull:false
    },
    age:{
        type:DataTypes.STRING,
        allownull:false
    }
})

patientDB.sync({force:false}, ()=>console.log("PatientDB is ready!"))
module.exports = patientDB