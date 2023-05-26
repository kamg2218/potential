import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routes from "./routes";

import { Reset } from "styled-reset";

import "./index.css";

import GlobalStyle from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./style/defaultTheme";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
