import express from 'express';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from '../controller/todo.controlller'; 

const todoRoute = express.Router();

todoRoute.get('/', getTodos);
todoRoute.post('/', addTodo);
todoRoute.patch('/:id', updateTodo);
todoRoute.delete('/:id', deleteTodo);

export default todoRoute;
