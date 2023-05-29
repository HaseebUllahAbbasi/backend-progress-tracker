const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

// Route to create a new user
router.post("/users", userController.createUser);

// Route to get user by ID
router.get("/users/:userId", userController.getUserById);

// Route to get user by username
router.get("/users/username/:username", userController.getUserByUsername);

// Route to delete all users
router.delete("/users", userController.deleteAllUsers);

// Route to delete user by ID
router.delete("/users/:userId", userController.deleteUserById);

module.exports = router;
