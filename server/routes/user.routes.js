const express = require ("express");
const userControllers = require("../controllers/user.controller");
const validate = require("../middlewares/validator.middleware");
const { signupSchema, loginSchema } = require("../validators/user.validation");
const router = express.Router();


//Routes Declaration
router.route("/").get(userControllers.home)

router
.route("/register")
.post(validate(signupSchema) ,userControllers.register)


router
.route("/login")
.post(validate(loginSchema), userControllers.login)


module.exports = router;