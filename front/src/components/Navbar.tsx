import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { MdLogin, MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IoCreate } from "react-icons/io5";


export default function Navbar() {
  const [darkMode, setDarkMode] = React.useState(true);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'light' : 'dark',
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: darkMode ? '#388adcff' : '#000000ff' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                desk todo-list
              </Link>
            </Typography>

            
            <IconButton
              component={Link}
              to="/create-todo"
              color="inherit"
              aria-label="create todo">
              <IoCreate size={24}/>
            </IconButton>


            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              aria-label="toggle dark mode"
            >
              {darkMode ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
            </IconButton>
            
            <IconButton
              component={Link}
              to="/register"
              color="inherit"
              aria-label="login"
            >
              <MdLogin size={24} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
