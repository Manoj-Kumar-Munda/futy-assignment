import React, { useEffect } from "react";
import useSearchContext from "./searchContext";

const SearchBar = () => {
  const { searchBy, setSearchBy, input, setInput } = useSearchContext();
//   console.log(input);
  useEffect(() => {
    setInput("");
  }, [searchBy]);

  return (
    <div className="flex gap-2 w-full bg-white px-2 rounded-xl">
      {searchBy === "Team" ? (
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border rounded-xl  bg-white py-0.5 text-black outline-none"
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
    </div>
  );
};

export default SearchBar;
