import React from 'react'
import { Box, Flex, Text, Link, Container, VStack, Heading, Input } from "@chakra-ui/react";

const HomePage = () => {
  return (
   <Container MaxW={'1140px'}>
 
    <VStack>
   <Heading fontSize={'2xl'} alignItems={'center'}>
      Welcome to the Todo App
    </Heading>
    <Box>
      <Input placeholder='Search todos...' />
    </Box>
    </VStack>
   </Container>
  )
}

export default HomePage