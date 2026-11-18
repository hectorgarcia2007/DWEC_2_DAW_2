import { Task } from "../models/task";

// Vehicle factory that creates vehicles based on type
class TaskFactory {
  static createTask(id, title, description, priority, createdAt) {
    if (typeof id !== "number") {
      return null;
    }
    const prioridades = ["low", "normal", "high"];
    if (prioridades.indexOf(priority) <= -1) {
      return null;
    }

    return new Task(id, title, description, priority, createdAt);
  }
}
