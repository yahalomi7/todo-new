import React from 'react'
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function NotFoundPage() {
  return (
    <>
    <Container>
<h1>404 - Page Not Found</h1>
<Link to="/">Go to Home</Link>
    </Container>
    </>
  )
}
