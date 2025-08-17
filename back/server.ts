import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './dbConnection';
import userRout from './routs/user.rout';
import todoRout from './routs/todo.rout';


dotenv.config();
connectDB();

const app = express();
const port= process.env.PORT || 8080;

app.use(express.json());

app.post('/test', (req, res) => {
  console.log('Test body:', req.body);
  res.send(req.body);
});

app.use('/api/users', userRout);
app.use('/api/todo', todoRout);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
