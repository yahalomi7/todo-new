import React, { useState } from 'react';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Navbar from '../components/Navbar';

export default function LoginPage() {

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
          backgroundColor: '#f5f5f5',
        }}
      >
<TextField id="Email" label="Email" variant="outlined" />
<TextField id="Passsword" label="Passsword" variant="outlined" />
<Button>
        Login
      </Button>
      <Button variant="outlined" color="primary" href="/login">
        Don't have an account? Login
      </Button>



      </Container>
    </>
  );
}
