import React, { useState } from 'react';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Navbar from '../components/Navbar';
import {loginUser} from '../store/User'

export default function LoginPage() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleLogin = async () => {
  try {
    const user = await loginUser(email, password);
   if (user) {
      console.log('Login successful:', user);
   }
  }
   catch (error) {
      console.error('Login failed:', error);
    }
  }

  return (
    <>
      <Navbar />
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mt: 5,
          gap: 3,
          padding: 2,
         
        }}
      >
<TextField id="Email" label="Email" variant="outlined" 
  sx={{
    width: '600px',
    input: { color: '#a1bcf0' },           
    label: { color: '#a1bcf0' },             
    fieldset: { borderColor: 'white' },   
  } }onChange={(e)=>setEmail(e.target.value)}/>
<TextField id="Passsword" label="Passsword" variant="outlined" 
  sx={{
    width: '600px',
    input: { color: '#a1bcf0' },           
    label: { color: '#a1bcf0' },             
    fieldset: { borderColor: 'white' },   
  }} onChange={(e)=>setPassword(e.target.value)}/>
  <Button variant='contained' onClick={handleLogin}>Login</Button>
      </Container>
    </>
  );
}
