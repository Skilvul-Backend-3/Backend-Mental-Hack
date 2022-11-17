const mongoose = require("mongoose");
const { schema } = mongoose;

const videoSchema = new schema({
  judul: String,
  deskripsi: String,
  tanggalUpload: Date
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;