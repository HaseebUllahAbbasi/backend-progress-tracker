const express = require("express");
const router = express.Router();

router.all("/", (req, res) => {
  res.status(200).json({
    message: "Server is Running 🚀🚀🚀🚀",
  });
});
module.exports = router;
