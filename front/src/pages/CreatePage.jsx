import React from 'react'
import { Box, Flex,Text,Link,Container, VStack, Heading,Input } from "@chakra-ui/react";

const CreatePage = () => {
  return (
   <Container maxW={'1140px'} >
 <VStack>
 
    <Heading as={'h1'} alignContent={'center'} fontSize={'2xl'}  >
      Create New Todo
    </Heading> 
    <Box>
      <Input placeholder='title' />
      
    </Box>
 </VStack>
   </Container>
  )
}

export default CreatePage