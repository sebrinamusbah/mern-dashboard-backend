import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Task = sequelize.define(
  "Task",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    status: {
      type: DataTypes.ENUM("pending", "in-progress", "completed"),
      defaultValue: "pending",
    },
  },
  { timestamps: true }
);

export default Task;
