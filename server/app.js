const express = require ("express");
const app = express();
const userRouter = require("./routes/user.routes")

app.use(express.json());

app.use("/api/user", userRouter);

module.exports = app;
