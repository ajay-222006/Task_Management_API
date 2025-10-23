import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import tasksRouter from './routes/tasks.js';
import { errorHandler } from './middleware/errorHandler.js';
import { loggerMiddleware } from './middleware/logger.js';

const app = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Third-party middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(loggerMiddleware);

// Routes
app.use('/api/tasks', tasksRouter);

// Health-check
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

// Error handler (last)
app.use(errorHandler);

export default app;
