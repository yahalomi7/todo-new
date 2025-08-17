"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnection_1 = require("./dbConnection");
const user_rout_1 = __importDefault(require("./routs/user.rout"));
const todo_rout_1 = __importDefault(require("./routs/todo.rout"));
dotenv_1.default.config();
(0, dbConnection_1.connectDB)();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.post('/test', (req, res) => {
    console.log('Test body:', req.body);
    res.send(req.body);
});
app.use('/api/users', user_rout_1.default);
app.use('/api/todo', todo_rout_1.default);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
