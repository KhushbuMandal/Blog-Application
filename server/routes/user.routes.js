const express = require ("express");
const router = express.Router();

//Routes Declaration
router.route("/register").get((req , res) => {
    res.status(200).send("This is the registration page")
})

router.route("/login").get((req , res) => {
    res.status(200).send("This is the login page")
})


module.exports = router;