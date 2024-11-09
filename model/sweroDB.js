const db = require("./../model/db")
const {DataTypes} = require("sequelize")

const sweroDB = db.define("swero",{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    volume:{
        type: DataTypes.STRING,
        allowNull: false
    },
    size:{
        type: DataTypes.STRING,
        allowNull: false
    },
})

sweroDB.sync({force:false}, ()=>{
    console.log("SweroDb is Ready!")
})


module.exports = sweroDB