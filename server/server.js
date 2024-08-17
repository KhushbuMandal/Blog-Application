require ("dotenv").config();
const app = require("./app");
const connectDB = require ("./db/db");


const PORT = 3000;

connectDB()
.then (() => {

    app.listen(PORT , () => {
        console.log(`Server is running at port : ${PORT}`);
    })

})
.catch((err) => {
    console.log ("MONGODB db connection failed !!! " , err);
})
