const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  heading: { type: String, required: true },
  items: { type: [String], required: true },
  date: { type: Date, required: true },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
