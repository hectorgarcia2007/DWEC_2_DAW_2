class Task {
  constructor(id, title, description, priority, createdAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.done = false;
    this.createdAt = createdAt;
  }
}

export { Task };
