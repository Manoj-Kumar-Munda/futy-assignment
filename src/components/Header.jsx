import React, { useState } from "react";
import Profile from "../assets/profile.png";
import Hamburgur from "./Hamburgur";
import { IoSearchOutline } from "react-icons/io5";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { cn } from "../utils/cn";
import { FaArrowLeft } from "react-icons/fa6";
import { nanoid } from "nanoid";

const Header = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const searchBtnHandler = () => {
    if (!isSearchBarOpen) {
      setIsSearchBarOpen(true);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={{
        visible: { backgroundColor: "#242424" },
        hidden: {
          backgroundColor: "transparent",
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed transition duration-300 left-0 right-0 bg-dark z-50  border-b border-transparent m-0",
        !hidden && "border-white/20"
      )}
    >
      <div className="max-w-screen-xl mx-auto relative py-2 px-2 h-14 flex justify-between items-center">
        <AnimatePresence>
          {!isSearchBarOpen && (
            <motion.div
              animate={hidden ? { opacity: 0 } : { opacity: 1 }}
              className="inline-flex justify-start gap-2"
            >
              <motion.div
                className="bg-white rounded-full w-10 h-10 p-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.75 }}
                key={nanoid()}
              >
                <img
                  src={Profile}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.75 }}
                key={nanoid()}
                className="border-2 inline-flex items-center gap-4  text-red-600 my-1 rounded-2xl px-1 border-red-600"
              >
                <div className="font-extrabold rounded-full inline-flex justify-center items-center w-5 h-5 border-red-600 border-2 text-sm italic font-sans">
                  F
                </div>
                <span className="font-extrabold text-sm">50</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "transition-all delay-200 duration-300 rounded-full flex justify-center items-center gap-1 absolute right-14 left-2",
              isSearchBarOpen && "right-2 left-2 border-white/10"
            )}
          >
            <AnimatePresence>
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
            </AnimatePresence>

            <motion.div
              style={{ transformOrigin: "right" }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isSearchBarOpen
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0 }
              }
              transition={{ delay: 0.5, type: "tween", duration: 0.35 }}
              className="bg-white rounded-full overflow-hidden w-full pl-4 pr-2 flex"
            >
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-xl  bg-white py-0.5 text-black outline-none"
              />

              <select className="border border-black my-1 text-black rounded-full px-1 outline-none">
                {/* <option disabled selected>Search by</option> */}
                <option value={"Team"}>Team</option>
                <option value={"Date"}>Date</option>
              </select>
            </motion.div>

            <motion.button
              animate={hidden ? { opacity: 0 } : { opacity: 1 }}
              onClick={searchBtnHandler}
              className={cn(
                "w-10 h-10 rounded-full hover:bg-white/10 flex justify-center items-center shrink-0"
              )}
            >
              <IoSearchOutline size={20} />
            </motion.button>
          </div>

          <Hamburgur isSearchBarOpen={isSearchBarOpen} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
