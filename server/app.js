const express = require ("express");
const app = express();
const userRouter = require("./routes/user.routes")


app.get("/" , (req,res) => {
    res.status(200).send("The Home route is working fine");
})

app.use("/api/user", userRouter);

module.exports = app;
