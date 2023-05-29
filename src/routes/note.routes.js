const express = require("express");
const NoteController = require("../controller/notes.controller");

const router = express.Router();

// Route for creating a new note
router.post("/", NoteController.createNote);

// Route for getting all notes
router.get("/", NoteController.getNotesByUser);

// Route for getting a single note
// router.get("/:noteId", NoteController.);

// Route for updating a note
// router.put("/:noteId", NoteController.updateNote);

// Route for deleting a note
// router.delete("/:noteId", NoteController.deleteNote);
module.exports = router;
