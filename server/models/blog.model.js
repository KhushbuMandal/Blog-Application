const mongoose = require ("mongoose");

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        maxLength: [100, "Title cannot exceed 100 characters!"],
    },
    content: {
        type: String,
        required: true,
        maxLength: [5000, "Content cannot exceed 5000 characters!"],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // image : {
    //     type : String, //cloudinary url
    //     required : true,
    // }
    domain : {
        type : String,
        required : true,
        maxLength: [100, "Domain cannot exceed 100 characters!"],
    }

} , {timestamps : true});


const Blog = mongoose.model("Blog" , blogSchema);

module.exports = Blog