const express = require("express");
const notesController = require("../controllers/notes.controller");

const router = express.Router();

// Route to create a new note
router.post("/notes", notesController.createNote);

// Route to get notes for a user
router.get("/notes/user/:userId", notesController.getNotesByUser);

// Route to delete all notes for a user
router.delete("/notes/user/:userId", notesController.deleteNotesByUser);

module.exports = router;
