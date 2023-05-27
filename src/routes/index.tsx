import { Navigate } from "react-router";

import Layout from "../components/Layout";
import Oauth from "../components/Login/Oauth";
import MyCard from "../components/Cards/MyCard";
import SendCard from "../components/Cards/SendCard";
import Belief from "../components/Belief/Belief";
import Main from "../components/Main";

import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";
import MainPage from "../pages/MainPage";
import PaperPage from "../pages/PaperPage";
import CompletePage from "../pages/CompletePage";

import PocketPage from "../pages/PocketPage";

import MessagePage from "../pages/MessagePage";
import HistoryPage from "../pages/HistoryPage";
import Pocket from "../components/Pocket/Pocket";
import PocketDetails from "../components/Pocket/PocketDetails";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      {
        path: "/main",
        element: <MainPage />,
        children: [
          {
            index: true,
            element: <Main />,
          },
          {
            path: "card",
            element: <SendCard />,
          },
        ],
      },
      {
        path: "/card",
        element: <CardPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/card/mbti" />,
          },
          {
            path: "mbti",
            element: <MyCard />,
          },
          {
            path: "belief",
            element: <Belief />,
          },
        ],
      },
      { path: "/paper", element: <PaperPage /> },
      {
        path: "/pocket",
        element: <PocketPage />,
        children: [
          {
            index: true,
            element: <Pocket />,
          },
          {
            path: "details/:question",
            element: <PocketDetails />,
          },
        ],
      },
      { path: "/complete", element: <CompletePage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/message/:id", element: <MessagePage /> },
      { path: "/auth", element: <Oauth /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
