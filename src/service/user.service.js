const User = require("../model/user");
const catchAsyncError = require("../middleware/middleware");

// Function to create a new user
const createUser = catchAsyncError(async (username, password) => {
  const user = new User({ username, password });
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
};
