import { body, validationResult } from 'express-validator';

export const taskValidationRules = () => [
  body('title')
    .exists({ checkNull: true, checkFalsy: true }).withMessage('title is required')
    .isString().withMessage('title must be a string')
    .isLength({ max: 100 }).withMessage('title max length is 100'),
  body('description')
    .optional()
    .isString().withMessage('description must be a string')
    .isLength({ max: 500 }).withMessage('description max length is 500'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed']).withMessage('invalid status'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high']).withMessage('invalid priority'),
  body('dueDate')
    .optional()
    .isISO8601().withMessage('dueDate must be ISO 8601 datetime'),
  body('tags')
    .optional()
    .isArray().withMessage('tags must be an array of strings')
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return res.status(400).json({ errors: errors.array().map(e => e.msg) });
};
