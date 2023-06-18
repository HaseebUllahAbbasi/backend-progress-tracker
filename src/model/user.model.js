const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  expoPushToken: { type: String }, // Field to store the Expo push token
  notifications: { type: [String] }, // Field to store notifications
});

const User = mongoose.model("User", userSchema);

module.exports = User;
