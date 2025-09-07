import express from 'express';
import { authenticateJWT } from '../middlewars/checkauth';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from '../controller/todo.controlller'; 

const todoRoute = express.Router();

todoRoute.get('/', authenticateJWT, getTodos);
todoRoute.post('/', authenticateJWT, addTodo);
todoRoute.patch('/:id', authenticateJWT, updateTodo);
todoRoute.delete('/:id', authenticateJWT, deleteTodo);

export default todoRoute;
