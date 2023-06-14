const express = require("express");
const UserController = require("../controller/user.controller");

const router = express.Router();
router.post("/", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/:userId", UserController.getUserById);
router.delete("/:userId", UserController.deleteUserById);
router.delete("/", UserController.deleteAllUsers);
router.all("/test/test", (req, res) => {
  res.status(200).json({
    message: "server is running",
  });
});
module.exports = router;
