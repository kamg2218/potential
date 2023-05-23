import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";
import { Navigate } from "react-router-dom";

const routes = [
  {
    element: <Layout />,
    children: [{ path: '/login', element: <LoginPage /> }, { path: '/card', element: <CardPage /> }, { path: '*', element: <Navigate to="/login" /> }],
  }
];

export default routes;