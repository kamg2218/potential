import { Outlet } from "react-router-dom";

// import Header from "./header/Header";
// import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className='h-screen w-screen flex justify-start lg:justify-center'>
      <div className="w-0 sm:w-20 lg:w-0"></div>
      <div className="block bg-sky-100 max-w-xl w-full h-full">
        {/* <Header /> */}
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
