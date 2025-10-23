import { tasks } from '../data/tasksData.js';
import { v4 as uuidv4 } from 'uuid';

// Helper: find index by id
const findIndex = (id) => tasks.findIndex(t => t.taskId === id);

export const getAllTasks = (req, res) => {
  const { status, priority, tags, sortBy } = req.query;
  let result = [...tasks];

  if (status) result = result.filter(t => t.status === status);
  if (priority) result = result.filter(t => t.priority === priority);
  if (tags) {
    // tags query can be comma-separated
    const tagList = tags.split(',').map(s => s.trim());
    result = result.filter(t => tagList.every(tag => t.tags.includes(tag)));
  }

  if (sortBy) {
    if (sortBy === 'dueDate') {
      result.sort((a,b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    } else if (sortBy === 'createdAt') {
      result.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
  }

  res.json(result);
};

export const getTaskById = (req, res) => {
  const { taskId } = req.params;
  const task = tasks.find(t => t.taskId === taskId);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

export const createTask = (req, res) => {
  const { title, description = '', status = 'pending', priority = 'medium', dueDate = null, tags = [] } = req.body;

  // Duplicate title handling (example)
  if (tasks.some(t => t.title === title)) {
    return res.status(400).json({ error: 'Task with same title already exists' });
  }

  const newTask = {
    taskId: uuidv4(),
    title,
    description,
    status,
    priority,
    dueDate,
    tags,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const replaceTask = (req, res) => {
  const { taskId } = req.params;
  const { title, description = '', status = 'pending', priority = 'medium', dueDate = null, tags = [] } = req.body;

  const idx = findIndex(taskId);
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });

  const replaced = {
    taskId,
    title,
    description,
    status,
    priority,
    dueDate,
    tags,
    createdAt: tasks[idx].createdAt,
    updatedAt: new Date().toISOString()
  };

  tasks[idx] = replaced;
  res.json(replaced);
};

export const updateTask = (req, res) => {
  const { taskId } = req.params;
  const idx = findIndex(taskId);
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });

  const allowed = ['title','description','status','priority','dueDate','tags'];
  for (const key of Object.keys(req.body)) {
    if (allowed.includes(key)) {
      tasks[idx][key] = req.body[key];
    }
  }
  tasks[idx].updatedAt = new Date().toISOString();
  res.json(tasks[idx]);
};

export const deleteTask = (req, res) => {
  const { taskId } = req.params;
  const idx = findIndex(taskId);
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });
  tasks.splice(idx, 1);
  res.status(204).send();
};
