import { Request, Response } from 'express';
import Todo from '../schema/todo.schema.js'; 

export const getTodos= async (req:Request, res:Response):Promise<any> => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err: any) {
    res.status(500).json({ message: 'Error fetching todos', error: err.message });
  }
};

export const addTodo = async (req: Request, res: Response): Promise<any> => {
  const { title, completed } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Title is required' });
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'Completed must be a boolean value' });
  }

  try {
    const newTodo = new Todo({ title, completed });
    await newTodo.save();

    res.status(201).json({ message: 'Todo added successfully', todo: newTodo });
  } catch (err: any) {
    res.status(500).json({ message: 'Error adding todo', error: err.message });
  }
};

export const updateTodo = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const { title, completed } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Title is required' });
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'Completed must be a boolean value' });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo updated successfully', todo: updatedTodo });
  } catch (err: any) {
    res.status(500).json({ message: 'Error updating todo', error: err.message });
  }
};

export const deleteTodo = async (req: Request, res: Response): Promise<any>=> {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully', todo: deletedTodo });
  } catch (err: any) {
    res.status(500).json({ message: 'Error deleting todo', error: err.message });
  }
};
