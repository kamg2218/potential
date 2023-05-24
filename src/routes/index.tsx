import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";
import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RollingPaper from "../pages/RollingPaper";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/main", element: <MainPage /> },
      { path: "/card", element: <CardPage /> },
      { path: "/rollingPaper", element: <RollingPaper /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
