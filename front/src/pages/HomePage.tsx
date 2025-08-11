import React from 'react'
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
    <Navbar />
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Welcome to the Todo App</h1>
   
    </Container>
    </>
  )
}
