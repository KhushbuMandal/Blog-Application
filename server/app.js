
const express = require ("express");
var cors = require('cors')
const app = express();
const userRouter = require("./routes/user.routes")
const contactRouter = require("./routes/contact.routes")

const corsOptions = {
    origin: "http://localhost:5173",
    //origin: process.env.CLIENT_URL,
    methods : "GET , POST , PUT , DELETE , PATCH , HEAD ",
    credentials : true
};

app.use(cors(corsOptions));

//data get krne se phle hi cors lga lu
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/form" , contactRouter);

module.exports = app;
