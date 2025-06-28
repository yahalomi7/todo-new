import React, { useEffect, useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Input,
  Container,
  Text,
  Spinner,
} from "@chakra-ui/react";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch todos when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('/api/todo');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error('Failed to fetch todos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <Container maxW="1140px">
      <VStack spacing={4} align="stretch">
        <Heading fontSize="2xl" textAlign="center">
          Welcome to the Todo App
        </Heading>

        <Box>
          <Input placeholder="Search todos..." />
        </Box>

        <Box>
          {loading ? (
            <Spinner size="lg" />
          ) : todos.length === 0 ? (
            <Text>No todos found.</Text>
          ) : (
            todos.map((todo) => (
              <Box key={todo.id} p={4} borderWidth="1px" borderRadius="md">
                <Text
                  as={todo.completed ? 'del' : undefined}
                  color={todo.completed ? 'gray.500' : 'black'}
                >
                  {todo.title}
                </Text>
              </Box>
            ))
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default HomePage;
