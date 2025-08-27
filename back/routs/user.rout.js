"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const login_controller_1 = require("../controller/login.controller");
const loguot_controller_1 = require("../controller/loguot.controller");
const checkauth_1 = require("../middlewars/checkauth");
const userRout = express_1.default.Router();
userRout.post('/login', login_controller_1.loginUser);
userRout.post('/logout', loguot_controller_1.logoutUser);
userRout.get('/', checkauth_1.authenticateJWT, user_controller_1.getUser);
userRout.get('/:id', checkauth_1.authenticateJWT, user_controller_1.getUserById);
userRout.post('/', checkauth_1.authenticateJWT, user_controller_1.addUser);
userRout.patch('/:id', checkauth_1.authenticateJWT, user_controller_1.updateUser);
userRout.delete('/:id', checkauth_1.authenticateJWT, user_controller_1.deleteUser);
exports.default = userRout;
