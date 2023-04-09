import React from 'react';

import './app.scss';
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Add from './pages/addGig/Add';
import Gig from './pages/gig/Gig';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/myGigs',
          element: <MyGigs />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
      ],
    },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
