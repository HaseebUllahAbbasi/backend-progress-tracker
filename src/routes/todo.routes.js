const express = require("express");
const router = express.Router();

const TodoController = require("../controller/todo.controller");

// Route for creating a new to-do item
router.post("/", TodoController.createTodo);

// Route for getting all to-do items
router.get("/", TodoController.getAllTodos);

// Route for getting a specific to-do item by ID
router.get("/:id", TodoController.getTodoById);

// Route for updating a to-do item
router.put("/:id", TodoController.updateTodo);

// Route for deleting a to-do item
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;
