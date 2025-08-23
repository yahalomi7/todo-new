"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUserById = exports.getUser = void 0;
const user_schema_js_1 = __importDefault(require("../schema/user.schema.js"));
const bcrypt_js_1 = require("../bcrypt.js");
const getUser = async (req, res) => {
    try {
        const users = await user_schema_js_1.default.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};
exports.getUser = getUser;
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await user_schema_js_1.default.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching user', error: err.message });
    }
};
exports.getUserById = getUserById;
const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log('Incoming body:', req.body);
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }
    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Valid email is required' });
    }
    if (!password || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    const hashedPassword = await (0, bcrypt_js_1.hashPassword)(password);
    try {
        const existingUser = await user_schema_js_1.default.findOne({
            $or: [
                { username },
                { email }
            ]
        });
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }
        const newUser = new user_schema_js_1.default({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    }
    catch (err) {
        res.status(500).json({ message: 'Error adding user', error: err.message });
    }
};
exports.addUser = addUser;
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    if (!username || username.trim() === '') {
        return res.status(400).json({ message: 'Username is required' });
    }
    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Valid email is required' });
    }
    if (!password || password.trim() === '' || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    const hashedPassword = await (0, bcrypt_js_1.hashPassword)(password);
    try {
        const updatedUser = await user_schema_js_1.default.findByIdAndUpdate(id, { username, email, password: hashedPassword }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err.message });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await user_schema_js_1.default.findByIdAndDelete(id); // Corrected method name
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    }
    catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
};
exports.deleteUser = deleteUser;
