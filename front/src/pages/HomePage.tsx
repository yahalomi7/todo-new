import React from 'react'
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import { fetchingallTodos, deleteTodo} from '../store/Todo'; // Adjust the path as needed
import type { Todo } from '../store/Todo.ts' // Adjust the path as needed
import { MdDelete } from "react-icons/md";


export default function HomePage() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleClick = async () => {
    try {
      const data = await fetchingallTodos();
      setTodos(data);
      console.error("Failed to delete todo");
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
  return (
    <>
    <Navbar />
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Welcome to the Todo App</h1>
           <ul >
     {todos.map(todo => (
       <li key={todo._id} style={{ padding: '20px 40px', fontSize: '16px' ,listStyle: 'none'}}>{todo.title}  <button onClick={() => handleDelete(todo._id)} style={{ padding: '5px 10px', fontSize: '16px' }}><MdDelete /></button></li>
     ))}
   
   </ul>
   
        <button
          onClick={handleClick}
          
        >
          Fetch Todos
        </button>
    </Container>
    </>
  )
}
