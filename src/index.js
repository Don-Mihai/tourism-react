import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth from './pages/Auth';
import Register from './pages/Register';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <Auth />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '*',
        element: <div>404 - Page Not Found</div>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

