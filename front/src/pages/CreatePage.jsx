import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  Container,
  useToast,
} from "@chakra-ui/react";

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const toast = useToast(); // Optional: feedback to user

  const handleCreateTodo = async () => {
    if (!title.trim()) {
      toast({ title: 'Title is required', status: 'warning' });
      return;
    }

    try {
      const res = await fetch('/api/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false }),
      });

      if (!res.ok) {
        throw new Error('Failed to create todo');
      }

      const data = await res.json();

      toast({
        title: 'Todo created!',
        description: `ID: ${data.id}`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      setTitle(''); // Clear input
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
      });
    }
  };

  return (
    <Container maxW="1140px">
      <VStack spacing={4}>
        <Heading as="h1" fontSize="2xl">
          Create New Todo
        </Heading>
        <Box w="100%">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Button colorScheme="teal" onClick={handleCreateTodo}>
          Create
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePage;
