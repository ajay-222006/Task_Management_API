import { v4 as uuidv4 } from 'uuid';

const now = () => new Date().toISOString();

export const tasks = [
  {
    taskId: uuidv4(),
    title: "Set up project repo",
    description: "Initialize repository, add README and .gitignore",
    status: "completed",
    priority: "high",
    dueDate: null,
    tags: ["setup", "repo"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Create task model",
    description: "Design JS object model for tasks in memory",
    status: "in-progress",
    priority: "medium",
    dueDate: null,
    tags: ["design"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Implement GET /api/tasks",
    description: "Return tasks, support filtering and sort",
    status: "pending",
    priority: "high",
    dueDate: null,
    tags: ["api", "tasks"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Add validation middleware",
    description: "Validate POST and PATCH payloads",
    status: "pending",
    priority: "high",
    dueDate: null,
    tags: ["validation"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Write unit tests",
    description: "Prepare tests (not required for mini project)",
    status: "pending",
    priority: "low",
    dueDate: null,
    tags: ["tests"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Create sample data",
    description: "Add 15 tasks for demo",
    status: "completed",
    priority: "low",
    dueDate: null,
    tags: ["data"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Fix CORS issues",
    description: "Allow frontend to call API",
    status: "pending",
    priority: "medium",
    dueDate: null,
    tags: ["devops"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Implement PATCH /api/tasks/:taskId",
    description: "Allow partial updates",
    status: "in-progress",
    priority: "medium",
    dueDate: null,
    tags: ["api"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Add tags filter",
    description: "Allow filtering by tags",
    status: "pending",
    priority: "low",
    dueDate: null,
    tags: ["feature"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Document API",
    description: "Write README and API docs",
    status: "in-progress",
    priority: "high",
    dueDate: null,
    tags: ["docs"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Add delete endpoint",
    description: "Implement DELETE /api/tasks/:taskId",
    status: "pending",
    priority: "high",
    dueDate: null,
    tags: ["api", "delete"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Refactor controllers",
    description: "Split logic into controllers and utils",
    status: "pending",
    priority: "medium",
    dueDate: null,
    tags: ["refactor"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Add request logging",
    description: "Use morgan for HTTP logs",
    status: "completed",
    priority: "low",
    dueDate: null,
    tags: ["logging"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Edge-case handling",
    description: "Return 404s and 400s appropriately",
    status: "in-progress",
    priority: "medium",
    dueDate: null,
    tags: ["error-handling"],
    createdAt: now(),
    updatedAt: now()
  },
  {
    taskId: uuidv4(),
    title: "Prepare Postman collection",
    description: "Export collection with tests and environment",
    status: "pending",
    priority: "low",
    dueDate: null,
    tags: ["postman"],
    createdAt: now(),
    updatedAt: now()
  }
];
