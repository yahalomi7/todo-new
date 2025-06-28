import { Box,useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";
import Navbar from "./components/Navbar";
import React from "react";
import UsersPageLogin from "./pages/UsersPageLogin";
import UsersPageSignin from "./pages/UsersPageSignin";

function App() {
  return (
    <Box minH={'100vh' } bg={useColorModeValue('blue.100','gray.900')}>
      {<Navbar />}
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/create" element={<CreatePage />} />
       <Route path="/login" element={<UsersPageLogin />} />
       <Route path="/signin" element={<UsersPageSignin />} />
     </Routes>

    </Box>
  )
}

export default App
