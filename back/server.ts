import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './dbConnection';
import userRoute from './routers/user.route';
import todoRoute from './routers/todo.route';
import cors from 'cors';
import cookieParser from 'cookie-parser';


dotenv.config();
connectDB();

const app = express();
const port= process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use('/api/users', userRoute);
app.use('/api/todo', todoRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
