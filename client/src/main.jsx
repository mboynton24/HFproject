import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './login.jsx';
import SignUp from './signup.jsx';
import Dashboard from './Dashboard.jsx' //idnore error idk why its doing that

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login /> // Set Login as the initial route
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
