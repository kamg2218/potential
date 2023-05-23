import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import CardPage from "../pages/CardPage";

const routes = [
  {
    element: <Layout />,
    children: [{ path: '/login', element: <LoginPage /> }, { path: '/card', element: <CardPage /> }],
  }
];

export default routes;