import React, { createContext, useContext } from "react";

const RefsContext = createContext();

export const useRefsContext = () => useContext(RefsContext);

export const RefsProvider = ({ children, refs }) => {
  return <RefsContext.Provider value={refs}>{children} </RefsContext.Provider>;
};
