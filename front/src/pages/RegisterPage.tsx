import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import Navbar from '../components/Navbar';

// Optional: Hook up to your API
// import { registerUser } from '../store/User'; // If you have a user API

export default function RegisterPage() {
  const theme = useTheme();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!username.trim()) newErrors.username = 'Username is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      // Optional: Call your backend
      // await registerUser({ username, email, password });

      setSuccessMessage('Registration successful!');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err: any) {
      console.error('Registration error:', err);
      setSuccessMessage('Registration failed. Please try again.');
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
          color: theme.palette.text.primary,
        }}
      >
        <Typography variant="h4" align="center">
          Register
        </Typography>

        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
          fullWidth
        />

        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          fullWidth
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Register
        </Button>

        {successMessage && (
          <Typography align="center" color="success.main" mt={2}>
            {successMessage}
          </Typography>
        )}
      </Container>
    </>
  );
}
