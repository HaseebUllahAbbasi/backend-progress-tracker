const Note = require("../model/note.model");
const catchAsyncError = require("../middleware/catchAsyncError");

// Function to create a new note
const createNote = catchAsyncError(async (userId, heading, items, date) => {
  const note = new Note({
    user: userId,
    heading,
    items,
    date,
  });
  const newNote = await note.save();
  return newNote;
});

// Function to get notes for a user
const getNotesByUser = catchAsyncError(async (userId) => {
  const notes = await Note.find({ user: userId });
  return notes;
});

const deleteNotesByUser = catchAsyncError(async (userId) => {
  await Note.deleteMany({ user: userId });
  return {
    message: "All notes for the user have been deleted.",
  };
});

// Export the notesService module
module.exports = {
  createNote,
  getNotesByUser,
  deleteNotesByUser,
};
