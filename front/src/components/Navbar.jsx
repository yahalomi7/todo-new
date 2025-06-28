import React from 'react'
import { Text,Container,Flex, HStack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PiStackPlusThin } from "react-icons/pi";
import { useColorMode } from '@chakra-ui/react'
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { CiLogin } from "react-icons/ci";




const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Container MaxW={"1140px"} px={4}>
        <Flex
        h={20}
          alignItems='center'
          justifyContent='space-between'
          flexDir={{ base: 'column', sm: 'row' }}
          >
          <Text
            bgGradient='linear(to-l,rgb(103, 162, 251),rgb(28, 48, 165))'
            bgClip='text'
            fontSize='2xl'
            fontWeight='extrabold'
          >
            <Link to={'/'} > DESK Todo-list</Link>
           
          </Text> 
          <HStack spacing={2} alignItems={'center'}>
               <Link to={'/create'}>
               <Button>
                    <PiStackPlusThin fontSize={20}/>
               </Button>
               </Link>
               <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <IoMoon /> : <LuSun />}
               </Button>
            </HStack>
            <HStack spacing={2} alignItems={'center'}>
               <Link to={'/login'}>
               <Button>
                    <CiLogin fontSize={20}/>
               </Button>
               </Link>
           </HStack>
        </Flex>
      </Container>
    </div>
  )
}

export default Navbar

