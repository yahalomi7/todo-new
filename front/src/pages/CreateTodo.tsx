import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import { createTodo } from '../store/Todo';
import type { Todo } from '../store/Todo.ts';

export default function HomePage() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [newTitle, setNewTitle] = React.useState(''); // <-- Textbox state

  const handleCreate = async () => {
    if (!newTitle.trim()) return; // prevent empty input
    try {
      const newTodo = await createTodo(newTitle);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTitle(''); // Clear input after creation
    } catch (error) {
      console.error('Error creating todo:', error);
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
          gap: 2,
          mt: 4,
        }}
      >
        {/* Text Input */}
        <TextField
  label="New Todo"
  color="primary"
  variant="outlined"
  value={newTitle}
  onChange={(e) => setNewTitle(e.target.value)}
  sx={{
    width: '300px',
    input: { color: 'white' },             // input text
    label: { color: 'white' },             // label text
    fieldset: { borderColor: 'white' },    // border color (optional)
  }}
/>


        {/* Create Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreate}
          sx={{ mt: 1 }}
        >
          Create Todo
        </Button>

        {/* Preview List (optional) */}
        <ul style={{ marginTop: '2rem', color: 'white' }}>
          {todos.map((todo, index) => (
  <li key={todo._id || index}>{todo.title}</li>
      ))}
        </ul>
      </Container>
    </>
  );
}
