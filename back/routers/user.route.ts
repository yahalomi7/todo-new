import express from 'express';
import { loginUser } from '../controller/login.controller';
import {logoutUser} from '../controller/loguot.controller';
import { authenticateJWT } from '../middlewars/checkauth';

import  {
  getUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} from '../controller/user.controller';

const userRoute = express.Router();
userRoute.get('/',authenticateJWT, getUser);
userRoute.get('/:id',authenticateJWT, getUserById);
userRoute.post('/register', addUser);
userRoute.patch('/:id',authenticateJWT, updateUser);
userRoute.delete('/:id',authenticateJWT, deleteUser);
userRoute.post('/login', loginUser);
userRoute.post('/logout', logoutUser);




export default  userRoute;