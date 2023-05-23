import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className='h-screen w-screen flex'>
      <div className=""></div>
      <div className="block bg-sky-100 max-w-lg w-full">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <div className='sm:w-0 w-1/2'></div>
    </div>
  );
};

export default Layout;
