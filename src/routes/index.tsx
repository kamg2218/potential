import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";
import { Navigate } from "react-router-dom";
import GamePage from "../pages/GamePage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/card", element: <CardPage /> },
      { path: "/game", element: <GamePage /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
