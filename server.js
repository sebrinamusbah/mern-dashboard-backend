import express from "express";
import { sequelize, connectDB } from "./config/db.js";
import { User, Task } from "./models/associations.js";
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/task.js";

const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// Sync tables
sequelize.sync({ alter: true }).then(() => console.log("Tables synced"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
