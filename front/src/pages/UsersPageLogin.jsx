import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  Container,
  VStack,
  Heading,
  Input,
  Button
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const UsersPageLogin = () => {
  return (
    <Container maxW="1140px" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" fontSize="2xl" textAlign="center">
          Login
        </Heading>
        <Box w="100%" maxW="400px">
          <VStack spacing={4}>
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button colorScheme="blue" w="100%">Login</Button>
          </VStack>
        </Box>
        <Box>
          <Text fontSize="sm">
            Don't have an account?{' '}
            <Link as={RouterLink} to="/signin" color="blue.500">
              Sign Up
            </Link>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default UsersPageLogin;
