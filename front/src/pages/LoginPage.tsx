import { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import { loginUser } from '../store/User';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);

      if (user) {
        console.log('Login successful:', user);

        toast.success('🎉 Login successful!', {
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
          id="Email"
          label="Email"
          variant="outlined"
          sx={{
            width: '600px',
            input: { color: '#a1bcf0' },
            label: { color: '#a1bcf0' },
            fieldset: { borderColor: 'white' },
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="Password"
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            width: '600px',
            input: { color: '#a1bcf0' },
            label: { color: '#a1bcf0' },
            fieldset: { borderColor: 'white' },
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Container>
    </>
  );
}
