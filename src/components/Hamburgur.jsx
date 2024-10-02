import React, { useState } from "react";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import useApp from "./context";

const Hamburgur = ({ isSearchBarOpen }) => {

  const {showNav ,setShowNav} = useApp();

  const clickHandler = () => {
    setShowNav((prev) => !prev);
  
  }
  return (
    <>
      {!isSearchBarOpen && (
        <>
          <motion.button
            className={cn(
              "sm:hidden w-12 h-12 relative focus:outline-none rounded-full"
            )}
            onClick={clickHandler}
          >
            <div
              className={
                "block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2"
              }
            >
              <span
                className={cn(
                  "block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out",
                  showNav && "rotate-45",
                  !showNav && "-translate-y-1.5"
                )}
              ></span>
              <span
                className={cn(
                  "block absolute  h-0.5 w-5 text-white bg-current   transform transition duration-500 ease-in-out",
                  showNav && "opacity-0"
                )}
              ></span>
              <span
                className={cn(
                  "block absolute  h-0.5 w-7 text-white bg-current transform  transition duration-500 ease-in-out",
                  showNav && "-rotate-45",
                  !showNav && "translate-y-1.5"
                )}
              ></span>
            </div>
          </motion.button>
        </>
      )}
    </>
  );
};

export default Hamburgur;
