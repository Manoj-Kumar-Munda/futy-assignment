import React, { useEffect, useState } from "react";
import useSearchContext from "./searchContext";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const SearchBar = () => {
  const { searchBy, setSearchBy, input, setInput } = useSearchContext();

  useEffect(() => {
    setInput("");
  }, [searchBy]);

  return (
    <motion.div className="flex gap-2  bg-white px-2 rounded-xl sm:max-w-96 w-full">
      {searchBy === "Team" ? (
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border rounded-xl  bg-white py-0.5 text-black outline-none border-none"
        />
      ) : (
        <input
          type="date"
          value={input}
          className="outline-none w-full bg-white"
          onChange={(e) => setInput(e.target.value)}
        />
      )}

      <select
        onChange={(e) => setSearchBy(e.target.value)}
        className="border border-black my-1 text-black rounded-full px-1 outline-none"
      >
        <option value={"Team"}>Team</option>
        <option value={"Date"}>Date</option>
      </select>
    </motion.div>
  );
};

export default SearchBar;
