const express = require("express");
const cors = require("cors");
const sequelize = require("../config/database.cjs");
const Task = require("./models/tasks.cjs");

const app = express();
app.use(cors());
app.use(express.json());

// Endpointy
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Synchronizacja bazy i uruchomienie serwera
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
