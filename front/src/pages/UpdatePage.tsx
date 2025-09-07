import  { useState } from 'react';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import NavbarAuthAfter from '../components/NavbarAuthAfter';
import {updateUser} from '../store/User'

export default function UpdatePage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const handleUpdate = async () => {
  try {
    const user = await updateUser( username , password);
   if (user) {
      console.log('Update successful:', user);
   }
  }
   catch (error) {
      console.error('Update failed:', error);
    }
  };

 return (
    <>
      <NavbarAuthAfter />
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

        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </Container>
    </>
  );
}
