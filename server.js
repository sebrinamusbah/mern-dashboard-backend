// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/task.js";
import "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

// ===== CORS (Final Working Version) =====
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mern-dashboard-frontend-seven.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ===== ROUTES =====
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend API working!");
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
