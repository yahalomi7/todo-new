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
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
(0, dbConnection_1.connectDB)();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.post('/test', (req, res) => {
//   console.log('Test body:', req.body);
//   res.send(req.body);
// });
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173'
}));
app.use('/api/users', user_rout_1.default);
app.use('/api/todo', todo_rout_1.default);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
