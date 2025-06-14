import express from 'express'; 
import {connectDB} from './dbConnection.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json())
const port = process.env.PORT || 8080
connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`);
})