const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

/*
_______________________________

Home logic
_______________________________
 */
const home = async (req , res) => {
    try {

        res.status(200).send("Welcome to best App again");
        
    } catch (error) {
        
        console.log("error");
    }
}

/*
_______________________________

Registration logic
_______________________________
 */

const register = async (req , res) => {
    try {
       
        const {username , email ,  password} = req.body;

        const userExist = await User.findOne({email : email});

        if (userExist) {
            return res.status(400).json({message : "email already exists"});
        }

        const userCreated = await  User.create ({
            username ,
            email ,
            password
        });

        //res.status(201).json({message : userCreated})
        res.status(201).json({
            // message : userCreated , 
             message : "Registration Sucessful !!!",
             token : await userCreated.generateToken(), 
             userId : userCreated._id.toString()
        });
        
        
    } catch (error) {
        // res.status(500).json({message : "Error in Registartion"})
        next(error);
    }
}

/*
_______________________________

Login logic
_______________________________
 */

const login = async (req , res) => {
    try {

        const {email , password} = req.body;

        const userExist = await User.findOne({email});
        //console.log(userExist);

        if (!userExist){
            return res.status(400).json({message : "Invalid Credentials"});
        }

        const user = await userExist.comparePassword(password);

        //res.status(200).json({ user : userExist});

        if (user) {

            res.status(200).json({
                // message : userCreated , 
                message : "Login Sucessful !!!",
                token : await userExist.generateToken(), 
                userId : userExist._id.toString()
            });

        }else {
            res.status(401).json({message : "Inavlid email or password"});
        }
        
        
    } catch (error) {
        // res.status(500).json({message : "Error in Registartion"})
        next(error);
    }
}



module.exports = {home , register , login};

