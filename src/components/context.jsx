import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <AppContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

export default useApp;
