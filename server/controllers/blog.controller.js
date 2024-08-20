const Blog = require("../models/blog.model");

const createBlog = async (req, res) => {
    try {
        const {title,content,domain} = req.body;
        const author = req.user._id;
        if(!title || !domain || !content || !author) {
            return res.status(400).json({message: 'Please enter all fields'});
        }
        // Check if the blog already exists
        const blogExists = await Blog.findOne({ title });
        if (blogExists) {
            return res.status(400).json({ message: "Blog with the same title already exists" });
        }
        
        const newBlog = await Blog.create({title, domain, content, author});
        await newBlog.save();
        res.json({message: 'Blog created successfully', blog: newBlog});
    } catch (error) {
        res.status(404).json({message:"Error creating blog"})
        console.log(error);
    }
}


module.exports = createBlog