const express = require('express');
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Specify frontend origin
        methods: ["GET", "POST"],
        credentials:false
    }
});
const PORT = 8000;

let volume1 = 0;
let time1 = 0;
let factor1 = 0;
let count = 0;
let drop1 = 0;
let testingInterval;
app.use(cors({origin:"*"}))
app.use(express.json());


app.get("/hi", (req, res) => {
    console.log("someone hi " + count);
    count++;
    io.emit("gocount", count);
    res.json({ message: "hiii" });
});

app.post("/postField1", (req, res) => {
    const { volume, time, factor } = req.body;
    volume1 = Number(volume);
    time1 = Number(time);
    factor1 = Number(factor);
    console.log(req.body);
    res.json({ success: true });
});

app.get("/getFields", (req, res) => {
    console.log(`vol:${volume1} time: ${time1} factor: ${factor1}`);
    res.json({ volume1, time1, factor1 });
});

app.post("/drop1", (req, res) => {
    drop1++;
    io.emit("getDrop1", drop1);
    console.log(drop1);
    res.json({ message: true });
});
app.get("/doneSwero1", (req,res)=>{
    drop1 = 0
    clearInterval(testingInterval)
})
app.use("/v1", require("./Router/v1Route"));

io.on("connection", (socket) => {
    console.log(`${socket.id} is connected`);
});

server.listen(PORT, () => console.log(`SERVER STARTED AT PORT ${PORT}`));

//   testingInterval = setInterval(()=>{
//         drop1++;
//         io.emit("getDrop1", drop1);
//         console.log(drop1)
//     }, 1000)