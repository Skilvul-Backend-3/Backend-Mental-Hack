const express = require('express');
const router = express.Router();

const videoRouter = require("../routes/video.router");

router.get('/', (req, res) => {
  res.send('<h1></h1>Welcome To Mental Hack API</h1>');
});

router.use("/video", videoRouter);

module.exports = router;
