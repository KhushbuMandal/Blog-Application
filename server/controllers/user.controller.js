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

        res.status(201).json({message : userCreated})
        
        
    } catch (error) {
        res.status(500).json({message : "Error in Registartion"})
    }
}

/*
_______________________________

Login logic
_______________________________
 */

const login = async (req , res) => {
    try {

        console.log (req.body)
        res.status(200).json({message : req.body});
        
        
    } catch (error) {
        res.status(500).json({message : "Error in Registartion"})
    }
}



module.exports = {home , register , login};