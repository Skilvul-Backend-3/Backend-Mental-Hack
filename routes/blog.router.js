const express = require('express');
const { 
    getAllBlog, 
    getBlogById,
    postBlog,
    updateBlogById,
    deleteBlogById
} = require('../controllers/blog.controller');
const router = express.Router();

router.get("/",getAllBlog)
router.get("/:id",getBlogById)
router.post("/",postBlog)
router.put("/:id",updateBlogById)
router.delete("/:id",deleteBlogById)

module.exports = router