import express from "express";
import cors from "cors";
import { connectDB, sequelize } from "./config/db.js";

import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/task.js";
import "./models/associations.js";

const app = express();
app.use(express.json());

// ✅ Enable CORS for your frontend URL
app.use(
  cors({
    origin: ["http://localhost:3000", "https://your-frontend-domain.com"],
    credentials: true,
  })
);

// Connect MySQL / Postgres
connectDB();

// Sync tables
sequelize.sync({ alter: true }).then(() => {
  console.log("Database tables synced");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
