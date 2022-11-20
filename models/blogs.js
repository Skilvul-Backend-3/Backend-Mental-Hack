const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
    judul : String,
    deskripsi : String,
    tanggalUpload :{
        type: Date,
        default: Date.now()
    }
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports= Blog;