import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Register from "./pages/Register";
import Posts from ".src/pages/Posts";
import Profile from './pages/Profile';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/homePage";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
