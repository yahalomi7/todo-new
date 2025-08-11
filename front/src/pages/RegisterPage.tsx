import React from 'react'
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';

export default function RegisterPage() {
  return (
    <>
    <Navbar />
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>RegisterPage</h1>

    </Container>
    </>
  )
}
