const express = require("express")
const v1Router = express.Router()


v1Router.use("/patient",require("./v1/patientRouter"))
v1Router.use("/alerto", require("./v1/alertoRoute"))
v1Router.use("/user", require("./v1/userRouter"))
module.exports = v1Router