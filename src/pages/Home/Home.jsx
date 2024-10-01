import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      <div></div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Home;
