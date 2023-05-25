import { Outlet } from "react-router-dom";

// import Header from "./header/Header";
// import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className='h-screen w-screen flex justify-start lg:justify-center'>
      <div className="w-0 sm:w-20 lg:w-0"></div>
      <div className="block max-w-2xl w-full h-full" style={{ backgroundColor: 'rgb(32, 33, 36)' }}>
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
