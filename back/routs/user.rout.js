"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_ts_1 = require("../controller/user.controller.ts");
const userRout = express_1.default.Router();
userRout.get('/', user_controller_ts_1.getUser);
userRout.get('/:id', user_controller_ts_1.getUserById);
userRout.post('/', user_controller_ts_1.addUser);
userRout.patch('/:id', user_controller_ts_1.updateUser);
userRout.delete('/:id', user_controller_ts_1.deleteUser);
exports.default = userRout;
