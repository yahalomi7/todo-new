import express from 'express';
import  {
  getUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} from '../controller/user.controller.ts';
const userRout = express.Router();

userRout.get('/', getUser);
userRout.get('/:id', getUserById);
userRout.post('/', addUser);
userRout.patch('/:id', updateUser);
userRout.delete('/:id', deleteUser);


export default  userRout;