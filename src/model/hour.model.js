const mongoose = require("mongoose");

const hourlyProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: [String], required: true },
});

const HourlyProgress = mongoose.model("HourlyProgress", hourlyProgressSchema);

module.exports = HourlyProgress;
