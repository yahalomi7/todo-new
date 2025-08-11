import React from 'react';
import { Container } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';


import NotFoundPage from './pages/NotFoundPage.tsx';
const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
  }
])
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });



const App: React.FC = () => {
  return (
    <Container>
       {/* <ThemeProvider theme={darkTheme}>
      <CssBaseline />  */}
      <RouterProvider router={router}/>
    {/* </ThemeProvider> */}
     

   
    </Container>
  );
};

export default App;
