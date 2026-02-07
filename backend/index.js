const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const config = require("./config");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = []; // in-memory

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add task
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = { id: uuidv4(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Toggle task
app.patch("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t,
  );
  res.json(tasks.find((t) => t.id === id));
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id !== id);
  res.status(204).send();
});

// Edit task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  tasks = tasks.map((t) => (t.id === id ? { ...t, title } : t));
  res.json(tasks.find((t) => t.id === id));
});

const PORT = config.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
