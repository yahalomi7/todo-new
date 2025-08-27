"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controlller_1 = require("../controller/todo.controlller");
const todoRout = express_1.default.Router();
todoRout.get('/', todo_controlller_1.getTodos);
todoRout.post('/', todo_controlller_1.addTodo);
todoRout.patch('/:id', todo_controlller_1.updateTodo);
todoRout.delete('/:id', todo_controlller_1.deleteTodo);
exports.default = todoRout;
