import User from "./User.js";
import Task from "./Task.js";

// 1 User → many Tasks
User.hasMany(Task, { foreignKey: "userId", onDelete: "CASCADE" });

// Each Task belongs to a User
Task.belongsTo(User, { foreignKey: "userId" });

export { User, Task };
