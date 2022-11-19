const Blog = require("../models/blogs");
module.exports= {
    getAllBlog: async (req, res)=>{
            const blog = await Blog.find({})
            res.status(200).json({
              message :"success",
              data: blog
            })
    },
    getBlogById: (req, res)=>{
        const { id } = req.params

        const blog = new Blog.find(item => item.id == id)
        res.status(200).json({
            message :"success",
            data: blog
          })
    },
    postBlog: (req, res)=>{
        const data = req.body
        const blog = new Blog(data)

        blog.save()
        res.json({
        message : "luluk pintar"
        })
    },
    updateBlogById: (req, res)=>{
        const data = req.body
        const { id } = req.params
        Blog.updateOne(id,data);
        res.json({
            message: "Selamat tidak error *emot jempol"
        })

    },
    deleteBlogById: (req, res)=>{
        const { id } = req.params
        const blog = new Blog.find(item => item.id == id)
        Blog.deleteOne(blog)
        res.json({
            message: "Selamat tidak error *emot jempol"
        })
    }
}