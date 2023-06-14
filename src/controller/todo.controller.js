const TodoService = require("../service/todo.service");

// Controller function to create a new to-do item
const createTodo = async (req, res) => {
  const { title, user } = req.body;
  const newTodo = await TodoService.createTodo(title, user);
  res.status(201).json(newTodo);
};

// Controller function to get all to-do items
const getAllTodos = async (req, res) => {
  const todos = await TodoService.getAllTodos();
  res.json(todos);
};

// Controller function to get a specific to-do item by ID
const getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await TodoService.getAllTodosByUser(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "To-do item not found" });
  }
};

// Controller function to update a to-do item
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const todo = await TodoService.updateTodo(id, status);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "To-do item not found" });
  }
};

// Controller function to delete a to-do item
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await TodoService.deleteTodo(id);
  res.status(204).end();
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
