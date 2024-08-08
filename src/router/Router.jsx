import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Layout from "../component/Layout.jsx";
import { useAuthContext } from "../context/AuthContext";

// Route guard for protected routes
const ProtectedRoute = ({ element }) => {
  const { user } = useAuthContext();
  return user ? element : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <ProtectedRoute element={<Add />} />,
      },
      {
        path: "/edit/:id",
        element: <ProtectedRoute element={<Edit />} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // Add a 404 route
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

export default router;
