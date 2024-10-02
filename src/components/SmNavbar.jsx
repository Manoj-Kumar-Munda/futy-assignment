import React from "react";
import useApp from "./context";
import { cn } from "../utils/cn";

const SmNavbar = () => {
  const { showNav } = useApp();

  return (
    <div
      className={cn(
        " sm:hidden fixed top-14 left-2 right-2 rounded-xl overflow-hidden bg-white/40 backdrop-blur-xl text-gray-900 z-50 max-h-0 transition-all duration-300",
        showNav && "max-h-96"
      )}
    >
      <div className="flex flex-col gap-2 px-4 py-4">
        <span className="text-sm  font-semibold cursor-pointer">
          How to Play
        </span>
        <span className="text-sm font-semibold cursor-pointer">Help</span>
      </div>
    </div>
  );
};

export default SmNavbar;
