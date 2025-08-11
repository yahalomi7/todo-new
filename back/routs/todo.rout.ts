import express from 'express';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from '../controller/todo.controlller.js'; 

const todoRout = express.Router();

todoRout.get('/', getTodos);
todoRout.post('/', addTodo);
todoRout.patch('/:id', updateTodo);
todoRout.delete('/:id', deleteTodo);

export default todoRout;
