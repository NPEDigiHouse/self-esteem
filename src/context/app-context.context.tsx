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
  setResultPercentage: React.Dispatch<React.SetStateAction<number | null>>;
  currentTesterName: String | null;
  setCurrentTesterName: React.Dispatch<React.SetStateAction<String | null>>;
  currentTesterClass: String | null;
  setCurrentTesterClass: React.Dispatch<React.SetStateAction<String | null>>;
  currentTesterGender: String | null;
  setCurrentTesterGender: React.Dispatch<React.SetStateAction<String | null>>;
  currentTesterSchool: String | null;
  setCurrentTesterSchool: React.Dispatch<React.SetStateAction<String | null>>;
  currentTesterBirthDate: any | null;
  setCurrentTesterBirthDate: React.Dispatch<React.SetStateAction<any | null>>;
  kekuatanScore: number | null;
  setkekuatanScore: React.Dispatch<React.SetStateAction<number | null>>;
  kebajikanScore: number | null;
  setkebajikanScore: React.Dispatch<React.SetStateAction<number | null>>;
  keberartianScore: number | null;
  setkeberartianScore: React.Dispatch<React.SetStateAction<number | null>>;
  kemampuanDiriScore: number | null;
  setkemampuanDiriScore: React.Dispatch<React.SetStateAction<number | null>>;
}

export const AppContext = React.createContext<IAppContext>({
  currentPage: "home",
  setCurrentPage: () => {},
  result: null,
  setResult: () => {},
  resultPercentage: null,
  setResultPercentage: () => {},
  currentTesterName: "",
  setCurrentTesterName: () => {},
  currentTesterClass: "",
  setCurrentTesterClass: () => {},
  currentTesterGender: "",
  setCurrentTesterGender: () => {},
  currentTesterSchool: null,
  setCurrentTesterSchool: () => {},
  currentTesterBirthDate: null,
  setCurrentTesterBirthDate: () => {},
  kebajikanScore: null,
  keberartianScore: null,
  kekuatanScore: null,
  kemampuanDiriScore: null,
  setkebajikanScore: () => {},
  setkeberartianScore: () => {},
  setkekuatanScore: () => {},
  setkemampuanDiriScore: () => {},
});

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
  const [currPage, setCurrPage] = useState<NavbarMenuType>("home");
  const [result, setResult] = useState<TestResult>(null);
  const [currentTesterName, setCurrentTesterName] = useState<String | null>(
    null
  );
  const [currentTesterClass, setCurrentTesterClass] = useState<String | null>(
    null
  );
  const [currentTesterGender, setCurrentTesterGender] = useState<String | null>(
    null
  );
  const [currentTesterSchool, setCurrentTesterSchool] = useState<String | null>(
    null
  );
  const [currentTesterBirthDate, setCurrentTesterBirthDate] = useState<
    any | null
  >(null);
  const [resultPercentage, setResultPercentage] = useState<number | null>(null);
  
  const [a, seta] = useState<number | null>(null);
  const [b, setb] = useState<number | null>(null);
  const [c, setc] = useState<number | null>(null);
  const [d, setd] = useState<number | null>(null);

  const defaultAppContext: IAppContext = {
    currentPage: currPage,
    setCurrentPage: setCurrPage,
    result: result,
    setResult: setResult,
    resultPercentage: resultPercentage,
    setResultPercentage: setResultPercentage,
    currentTesterName: currentTesterName,
    setCurrentTesterName: setCurrentTesterName,
    currentTesterClass: currentTesterClass,
    setCurrentTesterClass: setCurrentTesterClass,
    currentTesterGender: currentTesterGender,
    setCurrentTesterGender: setCurrentTesterGender,
    currentTesterSchool: currentTesterSchool,
    setCurrentTesterSchool: setCurrentTesterSchool,
    currentTesterBirthDate: currentTesterBirthDate,
    setCurrentTesterBirthDate: setCurrentTesterBirthDate,
    kekuatanScore: a,
    kebajikanScore: b,
    keberartianScore: c,
    kemampuanDiriScore: d,
    setkekuatanScore: seta,
    setkebajikanScore: setb,
    setkeberartianScore: setc,
    setkemampuanDiriScore: setd
  };

  return (
    <AppContext.Provider value={defaultAppContext}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
