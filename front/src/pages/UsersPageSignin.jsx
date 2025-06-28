import React from 'react'
import { Box, Flex,Text,Link,Container, VStack, Heading,Input } from "@chakra-ui/react";

const UsersPageSignin = () => {
  return (
   <Container maxW={'1140px'} >
 <VStack>
 
    <Heading as={'h1'} alignContent={'center'} fontSize={'2xl'}  >
      Signin
    </Heading> 
    <Box>
      <Input placeholder='Username' />
      <Input placeholder='Email' />
      <Input placeholder='Password' type='password' />
    </Box>
 </VStack>
   </Container>
  )
}

export default UsersPageSignin