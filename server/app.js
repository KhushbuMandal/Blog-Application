const express = require ("express");
const app = express();
const userRouter = require("./routes/user.routes")
const contactRouter = require("./routes/contact.routes")

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/form" , contactRouter);

module.exports = app;
