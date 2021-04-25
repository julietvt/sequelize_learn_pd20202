import express from 'express';
import {
  createTask,
  deleteTask,
  updateTask,
  getTask,
} from '../controllers/task';
import validationMV from '../middlewares/validation/validationMV.js';
import { ACTION } from '../constants';
import schemas from '../utils/validation';

const taskRouter = express.Router();

const createUserValidationMV = validationMV(schemas.taskSchema);

userRouter.post('/', createUserValidationMV(ACTION.CREATE), createTask);

userRouter.patch('/:taskId', createUserValidationMV(ACTION.UPDATE), updateTask);

userRouter.get('/:taskId', createUserValidationMV(ACTION.READ), getTask);

userRouter.delete(
  '/:taskId',
  createUserValidationMV(ACTION.DELETE),
  deleteTask
);

export default taskRouter;
