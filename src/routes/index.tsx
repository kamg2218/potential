import { Navigate } from "react-router";

import Layout from "../components/Layout";
import Oauth from "../components/Login/Oauth";
import MyCard from "../components/MyCard/MyCard";
import Belief from "../components/Belief/Belief";

import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";
import MainPage from "../pages/MainPage";
import PaperPage from "../pages/PaperPage";
import CompletePage from "../pages/CompletePage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      {
        path: "/main",
        element: <MainPage />,
        children: [

        ],
      },
      {
        path: "/card",
        element: <CardPage />,
        children: [
          {
            index: true,
            element: <Navigate to='/card/mbti' />
          },
          {
            path: "mbti",
            element: <MyCard />,
          },
          {
            path: "belief",
            element: <Belief />,
          }
        ],
      },
      { path: "/paper", element: <PaperPage /> },
      { path: "/complete", element: <CompletePage /> },
      { path: "/auth", element: <Oauth /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
