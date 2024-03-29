const notesService = require("../service/notes.service");
const catchAsyncError = require("../middleware/catchAsyncError");

// Controller function to create a new note
const createNote = catchAsyncError(async (req, res) => {
  const { userId, heading, items, color } = req.body;
  const newNote = await notesService.createNote({
    userId,
    heading,
    items,
    color,
  });
  res.status(201).json(newNote);
});

const updateNote = catchAsyncError(async (req, res) => {
  const { noteId } = req.params;
  const { userId, heading, items, color } = req.body;
  const newNote = await notesService.updateNote({
    noteId,
    userId,
    heading,
    items,
    color,
  });
  res.status(201).json(newNote);
});

// Controller function to get notes for a user
const getNotesByUser = catchAsyncError(async (req, res) => {
  const { userId } = req.params;
  const notes = await notesService.getNotesByUser(userId);
  res.json(notes);
});

// Controller function to delete all notes for a user
const deleteNotesByUser = catchAsyncError(async (req, res) => {
  const { userId } = req.params;
  await notesService.deleteNotesByUser(userId);
  res.json({ message: "All notes for the user have been deleted." });
});
const deleteById = catchAsyncError(async (req, res) => {
  const { noteId } = req.params;
  await notesService.deleteNoteById(noteId);
  res.json({ message: "All notes for the user have been deleted." });
});

// Export the notesController module
module.exports = {
  createNote,
  getNotesByUser,
  deleteNotesByUser,
  updateNote,
  deleteById,
};
