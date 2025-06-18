import express from 'express'; 
import {connectDB} from './dbConnection.js';
import dotenv from 'dotenv';
import {todoRout} from './routs/todo.rout.js';
import {userRout} from './routs/user.rout.js';
dotenv.config();
const app = express();
app.use(express.json())
const port = process.env.PORT || 8080
connectDB();
app.use('/api/users',userRout)
app.use('/api/todo',todoRout)

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`);
})