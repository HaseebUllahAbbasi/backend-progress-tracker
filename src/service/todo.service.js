const Todo = require("../model/Todo.model");

// Create a new to-do item
const createTodo = async (title, user) => {
  const todo = new Todo({
    title,
    user,
  });
  await todo.save();
  return todo;
};

// Get all to-do items
const getAllTodos = async () => {
  const todos = await Todo.find();
  return todos;
};
const getAllTodosByUser = async (user) => {
  const todos = await Todo.find({ user });
  return todos;
};

// Get a specific to-do item by ID
const getTodoById = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

// Update a to-do item
const updateTodo = async (id, status) => {
  console.log(status, typeof status);
  const todo = await Todo.findByIdAndUpdate(
    id,
    { $set: { completed: status } },
    { new: true }
  );
  return todo;
};

// Delete a to-do item
const deleteTodo = async (id) => {
  await Todo.findByIdAndRemove(id);
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  getAllTodosByUser,
};
