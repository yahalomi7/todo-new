import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './dbConnection';
import userRout from './routs/user.rout';
import todoRout from './routs/todo.rout';
import cors from 'cors';
import cookieParser from 'cookie-parser';


dotenv.config();
connectDB();

const app = express();
const port= process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());

// app.post('/test', (req, res) => {
//   console.log('Test body:', req.body);
//   res.send(req.body);
// });
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use('/api/users', userRout);
app.use('/api/todo', todoRout);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
