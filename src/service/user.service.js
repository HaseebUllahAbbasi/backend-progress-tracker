const User = require("../model/user.model");
const catchAsyncError = require("../middleware/catchAsyncError");

// Function to create a new user
const createUser = catchAsyncError(async (username, password, email) => {
  const user = new User({ username, password, email });
  const newUser = await user.save();
  return newUser;
});

// Function to get user by ID
const getUserById = catchAsyncError(async (userId) => {
  const user = await User.findById(userId);
  return user;
});

// Function to get user by username
const getUserByUsername = catchAsyncError(async (username) => {
  const user = await User.findOne({ username });
  return user;
});

const loginUser = catchAsyncError(async (username, password) => {
  const user = await User.findOne({ username, password });
  return user;
});

// Function to delete all users
const deleteAllUsers = catchAsyncError(async () => {
  await User.deleteMany();
  return { message: "All users have been deleted." };
});

// Function to delete user by ID
const deleteUserById = catchAsyncError(async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    throw new Error("User not found.");
  }
  return { message: "User has been deleted." };
});

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  deleteAllUsers,
  deleteUserById,
  loginUser,
};
