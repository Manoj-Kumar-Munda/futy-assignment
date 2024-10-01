import React, { useEffect, useState } from "react";
import Profile from "../assets/profile.png";
import Hamburgur from "./Hamburgur";
import { IoSearchOutline } from "react-icons/io5";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "../utils/cn";
import { FaArrowLeft } from "react-icons/fa6";
import { nanoid } from "nanoid";
import Currency from "./Currency";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";

const Header = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  let timer;

  const searchBtnHandler = () => {
    if (!isSearchBarOpen) {
      setIsSearchBarOpen(true);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timer);
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    clearTimeout(timer);
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    timer = setTimeout(() => {
      setHidden(false);
    }, 1500);
  });

  return (
    <motion.header
      className={cn(
        "fixed transition duration-300 left-0 right-0 bg-dark z-50  border-b border-transparent m-0",
        !hidden && "border-white/20"
      )}
    >
      <div className="max-w-screen-xl mx-auto relative py-2 px-2 h-14 flex justify-between items-center">
        <motion.div
          className={cn(
            "inline-flex justify-start gap-2",
            isSearchBarOpen && "hidden"
          )}
        >
          <motion.div
            className="bg-white rounded-full w-10 h-10 p-1.5"
          >
            <img
              src={Profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={hidden ? { opacity: 0 } : { opacity: 1 }}
            transition={{ delay: 0 }}
            key={nanoid()}
            className="border-2 inline-flex items-center gap-4  text-red-600 my-1 rounded-2xl px-1 border-red-600"
          >
            <Currency />
            <span className="font-extrabold text-sm">50</span>
          </motion.div>
        </motion.div>

        <div className="flex items-center gap-2 justify-end">
          {/* searchbar for >sm devices */}
          <div className="hidden  sm:inline-flex gap-2 items-center w-full text-black">
            <SearchBar />
            <SearchBtn />
          </div>

          {/* searchbar for <=sm device */}
          <div
            className={cn(
              "flex sm:hidden transition-all  rounded-full justify-center items-center gap-1 absolute right-14 left-2",
              isSearchBarOpen && "right-2 left-2 border-white/10"
            )}
          >
            {isSearchBarOpen && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={nanoid()}
                className="relative"
                onClick={() => setIsSearchBarOpen(false)}
              >
                <FaArrowLeft />
              </motion.button>
            )}

            <motion.div
              style={{ transformOrigin: "right" }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isSearchBarOpen
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0 }
              }
              transition={{ delay: 0, type: "tween", duration: 0.3 }}
              className="bg-white sm:hidden rounded-full overflow-hidden w-full pl-2 flex text-black"
            >
              <SearchBar />
            </motion.div>

            <motion.div
            
              animate={hidden ? { opacity: 0 } : { opacity: 1 }}
              onClick={searchBtnHandler}
              className={cn(
                "w-10 h-10 rounded-full hover:bg-white/10 flex justify-center items-center shrink-0"
              )}
            >
              <SearchBtn />
            </motion.div>
          </div>

          <Hamburgur isSearchBarOpen={isSearchBarOpen} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
