/* import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/pages";
import { JournalPage } from "../journal/pages";
import { AuthLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <JournalPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        //* This is the root route for the /auth path
        path: "",
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage title="login" />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "*",
        element: <Navigate to="/auth/login" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default router;
 */