import React, { useState } from "react";
import { NavbarMenuType, TestResult } from "../utils/const/types";

interface IAppContextProvider {
  children: React.ReactNode;
}

interface IAppContext {
  currentPage: NavbarMenuType;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavbarMenuType>>;
  result: TestResult;
  setResult: React.Dispatch<React.SetStateAction<TestResult>>;
  resultPercentage: number | null;
  setResultPercentage: React.Dispatch<React.SetStateAction<number | null>>
}

export const AppContext = React.createContext<IAppContext>({
  currentPage: "home",
  setCurrentPage: () => {},
  result: null,
  setResult: ()=>{},
  resultPercentage: null,
  setResultPercentage: ()=>{}
});

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
  const [currPage, setCurrPage] = useState<NavbarMenuType>("home");
  const [result, setResult] = useState<TestResult>(null);
  const [resultPercentage, setResultPercentage] = useState<number | null>(null);

  const defaultAppContext: IAppContext = {
    currentPage: currPage,
    setCurrentPage: setCurrPage,
    result: result,
    setResult: setResult,
    resultPercentage: resultPercentage,
    setResultPercentage: setResultPercentage
  };

  return (
    <AppContext.Provider value={defaultAppContext}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
