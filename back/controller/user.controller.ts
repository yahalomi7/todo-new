import express from 'express';
import { Request, Response } from 'express';
import User from '../schema/user.schema.js'; 

export const getUser = async (req:Request, res:Response) :Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
};

export const getUserById = async (req:Request, res:Response) :Promise<void> => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err.message });
  }
};

export const addUser = async (req:Request, res:Response) :Promise<void> => {
  const { username,email, password } = req.body;
  console.log('Incoming body:', req.body);

  if (!username ) {
    return res.status(400).json({ message: 'Username is required' });
  }

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email is required' });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Error adding user', error: err.message });
  }
};
export const updateUser =async (req:Request, res:Response) :Promise<void>  => {
  const { id } = req.params;
  const {username,email,password } = req.body;
  if (!username || username.trim() === '') {
    return res.status(400).json({ message: 'Username is required' });
  }
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email is required' });
  }
  if (!password || password.trim() === '' || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }
    try {
        const updatedUser = await User.findByIdAndUpdate(
        id, { username, email, password }, { new: true });
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
      } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err.message });
        }
    }

export const deleteUser = async (req:Request, res:Response) :Promise<void> => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id); // Corrected method name

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err.message });
  }
};
