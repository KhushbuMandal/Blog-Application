const express = require ("express");
const userControllers = require("../controllers/user.controller");
const createBlog = require ("../controllers/blog.controller")
const validate = require("../middlewares/validator.middleware");
const { signupSchema, loginSchema } = require("../validators/user.validation");
const router = express.Router();


//Routes Declaration
router.route("/").get(userControllers.home)

//Authentication
router
.route("/register")
.post(validate(signupSchema) ,userControllers.register)


router
.route("/login")
.post(validate(loginSchema), userControllers.login)


//Crud of blog
router
.route("/create-blog")
.post(createBlog)

// router
// .route("/get-blog/:id")
// .get(userBlog)

// router
// .route("/edit-blog/:id")
// .put(editBlog)


// router
// .route("/delete-blog/:id")
// .delete(deleteBlog)

module.exports = router;