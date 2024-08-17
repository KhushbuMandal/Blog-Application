const express = require ("express");
const userControllers = require("../controllers/user.controller");
const router = express.Router();


//Routes Declaration
router.route("/").get(userControllers.home)

router.route("/register").post(userControllers.register)


router.route("/login").post(userControllers.login)


module.exports = router;