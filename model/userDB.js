const db = require("./../model/db")
const {DataTypes} = require("sequelize")

const userDB = db.define("user",{
    username:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },

}
)

userDB.sync({force:false}, ()=> console.log("userDB is Ready!"))
module.exports = userDB