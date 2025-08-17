"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const todo_schema_js_1 = __importDefault(require("../schema/todo.schema.js"));
const getTodos = async (req, res) => {
    try {
        const todos = await todo_schema_js_1.default.find();
        res.status(200).json(todos);
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching todos', error: err.message });
    }
};
exports.getTodos = getTodos;
const addTodo = async (req, res) => {
    const { title, completed } = req.body;
    if (!title || title.trim() === '') {
        return res.status(400).json({ message: 'Title is required' });
    }
    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Completed must be a boolean value' });
    }
    try {
        const newTodo = new todo_schema_js_1.default({ title, completed });
        await newTodo.save();
        res.status(201).json({ message: 'Todo added successfully', todo: newTodo });
    }
    catch (err) {
        res.status(500).json({ message: 'Error adding todo', error: err.message });
    }
};
exports.addTodo = addTodo;
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    if (!title || title.trim() === '') {
        return res.status(400).json({ message: 'Title is required' });
    }
    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Completed must be a boolean value' });
    }
    try {
        const updatedTodo = await todo_schema_js_1.default.findByIdAndUpdate(id, { title, completed }, { new: true, runValidators: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo updated successfully', todo: updatedTodo });
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating todo', error: err.message });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await todo_schema_js_1.default.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully', todo: deletedTodo });
    }
    catch (err) {
        res.status(500).json({ message: 'Error deleting todo', error: err.message });
    }
};
exports.deleteTodo = deleteTodo;
