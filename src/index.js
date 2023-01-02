import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./pages/Home"
import Login from "./pages/Login"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Create a browser router with three routes:
// - "/" renders the App component
// - "home" renders the Home component
// - "login" renders the Login component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

// Get the root element of the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the RouterProvider component with the router object as a prop
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
