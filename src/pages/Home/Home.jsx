import React from "react";
import Header from "../../components/Header";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
