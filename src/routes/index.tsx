import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";
import MainPage from "../pages/MainPage";
import PaperPage from "../pages/PaperPage";

import { Navigate } from "react-router-dom";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/main", element: <MainPage /> },
      { path: "/card", element: <CardPage /> },
      { path: "/paper", element: <PaperPage /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
