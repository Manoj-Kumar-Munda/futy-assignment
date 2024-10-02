import React from "react";
import Header from "../../components/Header";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import SmNavbar from "../../components/SmNavbar";
import useApp from "../../components/context";
import { cn } from "../../utils/cn";

const Home = () => {
  const { pathname } = useLocation();
  const { showNav } = useApp();
  console.log(pathname);
  return (
    <div className="relative">
      <Header />

      <SmNavbar />
      <div className="max-w-screen-xl mx-auto">
        <div
          className={cn(
            " sm:hidden fixed inset-0 bg-transparent transition-all duration-300 w-96 h-96   z-10  rounded-full top-0 left-0",
            showNav && "bg-black/40 scale-[320%]"
          )}
        ></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
