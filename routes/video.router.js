const express = require("express");
const router = express.Router();

const {
  getAllVideo,
  getVideoById,
  addVideo,
  updateVideoById,
  deleteVideoById,
} = require("../controllers/video.controller");
const { verifyToken, adminOnly } = require("../middleware/AuthUser");

router.get("/", verifyToken, adminOnly, getAllVideo);
router.get("/:id", getVideoById);
router.post("/", addVideo);
router.patch("/:id", updateVideoById);
router.delete("/:id", deleteVideoById);

module.exports = router;
