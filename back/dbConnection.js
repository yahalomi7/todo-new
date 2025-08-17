"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        const uri = process.env.DBURI;
        if (!uri) {
            throw new Error('DBURI is not defined in the environment variables');
        }
        const conn = await mongoose_1.default.connect(uri);
        console.log('✅ MongoDB connected:', conn.connection.host);
    }
    catch (err) {
        console.error('❌ Error connecting to MongoDB:', err);
        process.exit(1); // Optional: exit process on DB failure
    }
};
exports.connectDB = connectDB;
