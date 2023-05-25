import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";
import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/card', element: <CardPage /> },
      { path: '/auth', element: <MainPage /> },
      { path: '*', element: <Navigate to="/login" /> },
    ],
  }
];

export default routes;