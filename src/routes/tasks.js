import express from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  replaceTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';
import { taskValidationRules, validate } from '../utils/validateTask.js';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:taskId', getTaskById);
router.post('/', taskValidationRules(), validate, createTask);
router.put('/:taskId', taskValidationRules(), validate, replaceTask);
router.patch('/:taskId', validate, updateTask); // partial update - validate only when needed
router.delete('/:taskId', deleteTask);

export default router;
