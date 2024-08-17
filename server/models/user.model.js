const mongoose = require ("mongoose");
const bcrypt = require ("bcryptjs")


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
    },
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    }
});

//secure the password with the bcrypt
// database me save krene se phele run hoga
userSchema.pre ("save", async function(next){
    // console.log("pre method" , this);
 
    const user = this;
 
    if (!user.isModified("password")){
     next();
    }
 
    //means first time password ban rha hai
    try{
 
     const saltRound = await bcrypt.genSalt(10);
     const hash_password = await bcrypt.hash(user.password , saltRound);
     user.password = hash_password;
 
    }catch(error) {
     next(error);
    }
 
 
 });

//compare the password -> during Login
userSchema.methods.comparePassword = async function (password) {
    return  await bcrypt.compare(password , this.password);
}


const User = mongoose.model("User" , userSchema)

module.exports = User;