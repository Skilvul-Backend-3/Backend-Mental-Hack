const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
    judul : String,
    deskripsi : String,
    tanggalUpload : Date
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports= Blog;