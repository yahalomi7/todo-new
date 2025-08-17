import React from 'react';
import { Container } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import CreateTodo from './pages/CreateTodo.tsx';


import NotFoundPage from './pages/NotFoundPage.tsx';
const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/create-todo',
    element:<CreateTodo/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
  }
]);


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
