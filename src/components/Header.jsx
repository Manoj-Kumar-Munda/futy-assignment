import React from "react";
import Profile from "../assets/profile.png";
import Hamburgur from "./Hamburgur";
const Header = () => {
  return (
    <header className="py-2 px-2 border flex justify-between items-center">
      <div className="bg-white rounded-full  w-12 h-12 p-1.5">
        <img
          src={Profile}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      <Hamburgur />
    </header>
  );
};

export default Header;
