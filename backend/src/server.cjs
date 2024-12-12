const express = require("express");
const cors = require("cors");
const sequelize = require("../config/database.cjs");
const Task = require("./models/tasks.cjs");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const { title, completed } = req.body;
    const task = await Task.create({ title, completed });
    res.json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    task.title = title;
    task.completed = completed;
    await task.save();

    res.json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    await task.destroy();
    res.json({ msg: "Task deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
