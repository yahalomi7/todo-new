import React from 'react';
import { Container } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import CreateTodo from './pages/CreateTodo.tsx';
import LoginPage from './pages/LoginPage.tsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from './pages/NotFoundPage.tsx';
import UpdatePage from './pages/UpdatePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/create-todo',
    element: <CreateTodo />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/update',
    element: <UpdatePage />
  }
]);

const App: React.FC = () => {
  return (
    <>
      {/* ✅ Toast container must be global, not inside <Container> */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
};

export default App;
