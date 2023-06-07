const userService = require("../service/user.service");
const catchAsyncError = require("../middleware/catchAsyncError");

// Controller function to create a new user
const createUser = catchAsyncError(async (req, res) => {
  const { username, password, email } = req.body;
  const newUser = await userService.createUser(username, password, email);
  res.status(201).json(newUser);
});

// Controller function to get user by ID
const getUserById = catchAsyncError(async (req, res) => {
  const { userId } = req.params;
  const user = await userService.getUserById(userId);
  res.json(user);
});

const loginUser = catchAsyncError(async (req, res) => {
  const { username, password } = req.body;
  const user = await userService.loginUser(username, password);
  res.json(user);
});

// Controller function to get user by username
const getUserByUsername = catchAsyncError(async (req, res) => {
  const { username } = req.params;
  const user = await userService.getUserByUsername(username);
  res.json(user);
});

// Controller function to delete all users
const deleteAllUsers = catchAsyncError(async (req, res) => {
  await userService.deleteAllUsers();
  res.json({ message: "All users have been deleted." });
});

// Controller function to delete user by ID
const deleteUserById = catchAsyncError(async (req, res) => {
  const { userId } = req.params;
  await userService.deleteUserById(userId);
  res.json({ message: "User has been deleted." });
});

// Export the userController module
module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  deleteAllUsers,
  deleteUserById,
  loginUser,
};
