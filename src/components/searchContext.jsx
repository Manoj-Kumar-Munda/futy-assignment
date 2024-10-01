import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchBy, setSearchBy] = useState("Team");
  const [input, setInput] = useState("");
  return (
    <SearchContext.Provider value={{ searchBy, setSearchBy, input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => useContext(SearchContext);

export default useSearchContext;
