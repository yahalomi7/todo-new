import { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import { registerUser } from '../store/User';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const newUser = await registerUser({ username, email, password });
      if (newUser) {
        console.log('Registration successful:', newUser);

        toast.success('🎉 Registration successful!', {
          autoClose: 3000,
        });

        // ⏳ add small delay so toast renders before redirect
        setTimeout(() => navigate("/"), 300);
      }
    } catch (error) {
      console.error('Login failed:', error);

      toast.error('❌ Login failed. Please try again.', {
        autoClose: 3000,
      });
    }
  };

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
        <TextField
          id="Username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            width: '600px',
            input: { color: '#a1bcf0' },
            label: { color: '#a1bcf0' },
            fieldset: { borderColor: 'white' },
          }}
        />

        <TextField
          id="Email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: '600px',
            input: { color: '#a1bcf0' },
            label: { color: '#a1bcf0' },
            fieldset: { borderColor: 'white' },
          }}
        />

        <TextField
          id="Password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: '600px',
            input: { color: '#a1bcf0' },
            label: { color: '#a1bcf0' },
            fieldset: { borderColor: 'white' },
          }}
        />

        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>

        <Button variant="outlined" color="primary" href="/login">
          Already have an account? Login
        </Button>
      </Container>
    </>
  );
}
