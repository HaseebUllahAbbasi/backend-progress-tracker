const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  heading: { type: String, required: true },
  items: { type: [String], required: true },
  color: { type: String, default: "blue" },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
