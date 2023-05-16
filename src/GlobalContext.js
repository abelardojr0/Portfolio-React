import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [requestCounter, setRequestCounter] = useState(0);

  return (
    <GlobalContext.Provider value={{ requestCounter, setRequestCounter }}>
      {children}
    </GlobalContext.Provider>
  );
};
