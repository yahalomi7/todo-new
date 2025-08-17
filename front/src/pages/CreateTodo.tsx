import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import { fetchingallTodos } from '../store/Todo'; // Adjust the path as needed

export default function HomePage() {
const [todos, setTodos] = React.useState<Todo[]>([]);

const handleClick = async () => {
  try {
    const data = await fetchingallTodos();
    setTodos(data);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};


  return (
    <>
      <Navbar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>

        <button
          onClick={handleClick}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Fetch Todos
        </button>
      </Container>
    </>
  );
}
