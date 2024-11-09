

const db = require("./../model/db")
const {DataTypes} = require("sequelize")

const alertoDB = db.define("alerto",{
    userEmployee:{
        type:DataTypes.STRING,
        allowNull:false
    },
    patientFirstname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    patientMiddlename:{
        type:DataTypes.STRING,
        allowNull:false
    },
    patientLastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sweroVolume:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sweroName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sweroSize:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sweroType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dropFactor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    calculatedDpm:{
        type:DataTypes.STRING,
        allowNull:false
    },
    totalDrops:{
        type:DataTypes.STRING,
        allowNull:false
    },
    totalDropNeeded:{
        type:DataTypes.STRING,
        allowNull:false
    },
    timeToRun:{
        type: DataTypes.STRING,
        allowNull:false
    },
    startTime:{
        type: DataTypes.STRING,
        allowNull:false
    },
    endTime:{
        type: DataTypes.STRING,
        allowNull:false
    },
    device:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

alertoDB.sync({force:false},()=>{
    console.log("alertoDB is Ready!")
})

module.exports = alertoDB