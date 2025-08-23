import express from 'express';
import  {
  getUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} from '../controller/user.controller';
import { loginUser } from '../controller/login.controller';
import {logoutUser} from '../controller/loguot.controller';
import { authenticateJWT } from '../middlewars/checkauth';

const userRout = express.Router();

userRout.post('/login', loginUser);
userRout.post('/logout', logoutUser);

userRout.get('/',authenticateJWT, getUser);
userRout.get('/:id',authenticateJWT, getUserById);
userRout.post('/',authenticateJWT, addUser);
userRout.patch('/:id',authenticateJWT, updateUser);
userRout.delete('/:id',authenticateJWT, deleteUser);


export default  userRout;