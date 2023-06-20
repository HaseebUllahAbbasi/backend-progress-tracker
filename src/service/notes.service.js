const Note = require("../model/note.model");
const catchAsyncError = require("../middleware/catchAsyncError");

const updateNote = catchAsyncError(
  async ({ noteId, userId, heading, items, color }) => {
    const update = await Note.findByIdAndUpdate(noteId, {
      $set: { color: color, items: items, heading: heading },
    });
    return update;
  }
);

// Function to create a new note
const createNote = catchAsyncError(
  async ({ userId, heading, items, color }) => {
    const note = new Note({
      user: userId,
      heading,
      items,
      color,
    });
    const newNote = await note.save();
    return newNote;
  }
);

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
const deleteNoteById = catchAsyncError(async (noteId) => {
  console.log(noteId, "deletion");
  await Note.findByIdAndDelete(noteId);
  return {
    message: "notes has been deleted.",
  };
});

module.exports = {
  createNote,
  getNotesByUser,
  deleteNotesByUser,
  deleteNoteById,
  updateNote,
};
