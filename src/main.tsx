import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routes from "./routes";

import { Reset } from "styled-reset";

import "./index.css";

import GlobalStyle from "./style/GlobalStyle";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Reset />
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
