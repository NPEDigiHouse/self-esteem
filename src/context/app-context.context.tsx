import React, { useState } from "react";
import { NavbarMenuType } from "../utils/const/types";

interface IAppContextProvider {
  children: React.ReactNode;
}

interface IAppContext {
  currentPage: NavbarMenuType;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavbarMenuType>>;
}

export const AppContext = React.createContext<IAppContext>({
  currentPage: "home",
  setCurrentPage: () => {}
});

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
  const [currPage, setCurrPage] = useState<NavbarMenuType>("home");

  const defaultAppContext : IAppContext= {
    currentPage: currPage,
    setCurrentPage: setCurrPage
  }

  return (
    <AppContext.Provider value={defaultAppContext}>
      {children}
    </AppContext.Provider>
  )
};

export default AppContextProvider;
