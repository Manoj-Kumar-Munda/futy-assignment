import React, { useState } from "react";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";

const Hamburgur = ({ isSearchBarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isSearchBarOpen && (
        <>
          <motion.button
            className={cn(
              "sm:hidden w-12 h-12 relative focus:outline-none rounded-full"
            )}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div
              className={
                "block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2"
              }
            >
              <span
                className={cn(
                  "block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out",
                  isOpen && "rotate-45",
                  !isOpen && "-translate-y-1.5"
                )}
              ></span>
              <span
                className={cn(
                  "block absolute  h-0.5 w-5 text-white bg-current   transform transition duration-500 ease-in-out",
                  isOpen && "opacity-0"
                )}
              ></span>
              <span
                className={cn(
                  "block absolute  h-0.5 w-7 text-white bg-current transform  transition duration-500 ease-in-out",
                  isOpen && "-rotate-45",
                  !isOpen && "translate-y-1.5"
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
