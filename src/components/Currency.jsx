import React from "react";
import { cn } from "../utils/cn";

const Currency = ({ className }) => {
  return (
    <div
      className={cn(
        "font-extrabold rounded-full inline-flex justify-center items-center w-5 h-5 border-red-600 border-2 text-sm italic font-sans",
        className
      )}
    >
      F
    </div>
  );
};

export default Currency;
