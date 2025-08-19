import React from 'react'
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import { fetchingallTodos, deleteTodo} from '../store/Todo'; 
import type { Todo } from '../store/Todo.ts' 
import { MdDelete } from "react-icons/md";


export default function HomePage() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await fetchingallTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

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
      <h1>{todos.length===0?`insert new todos`:`The todos there left`}</h1>
           <ul >
     {todos.map(todo => (
       <li key={todo._id} style={{ padding: '20px 40px', fontSize: '16px' ,listStyle: 'none',color:'#a1bcf0'}}>{todo.title}  <button onClick={() => handleDelete(todo._id)} style={{ padding: '5px 10px', fontSize: '16px' }}><MdDelete /></button></li>
     ))}
   </ul>

    </Container>
    </>
  )
}
