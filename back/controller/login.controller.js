"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../utils/jwt");
const user_schema_1 = __importDefault(require("../schema/user.schema"));
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await user_schema_1.default.findOne({ email });
        if (!user)
            return res.status(401).json({ message: 'Invalid credentials' });
        const isMatch = await bcrypt_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ message: 'Invalid credentials' });
        const token = (0, jwt_1.generateToken)({ userId: user._id, username: user.username });
        // Set cookie
        res.cookie('token', token, {
            httpOnly: true, // Protects from XSS
            secure: process.env.NODE_ENV === 'production', // only https in prod
            sameSite: 'strict', // CSRF protection
            maxAge: 3600000 // 1 hour in ms
        });
        res.status(200).json({ message: 'Login successful' });
    }
    catch (err) {
        res.status(500).json({ message: 'Login error', error: err.message });
    }
};
exports.loginUser = loginUser;
