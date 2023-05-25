import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";
import MainPage from "../pages/MainPage";
import PaperPage from "../pages/PaperPage";
import Oauth from "../components/Login/Oauth";
import CompletePage from "../pages/CompletePage";
import { Navigate } from "react-router-dom";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/main", element: <MainPage /> },
      { path: "/card", element: <CardPage /> },
      { path: "/paper", element: <PaperPage /> },
      { path: "/complete", element: <CompletePage /> },
      { path: "/auth", element: <Oauth /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
