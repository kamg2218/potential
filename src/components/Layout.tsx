import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
