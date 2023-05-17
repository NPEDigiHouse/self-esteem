import { AppShell } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import HeaderLayout from "./HeaderLayout.layout";
import { useWindowScrollPositions } from "../hooks/useWindowScrollPositions";
import FooterLayout from "./FooterLayout.layout";
import { AppContext } from "../context/app-context.context";
import { useLocation } from "react-router-dom";
import { NavbarMenuType } from "../utils/const/types";

export interface IMainLayout {
  children: JSX.Element;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const {currentPage, setCurrentPage} = useContext(AppContext);

  const location= useLocation();
  const currPath= location.pathname.substring(1);

  setCurrentPage(currPath as NavbarMenuType)
  // useEffect(()=>{
  // }, [location.pathname])

  console.log(location, "location")

  return (
    <AppShell
      padding={0}
      header={<HeaderLayout scrollY={scrollY} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      className={""}
      footer={<FooterLayout />}
    >
      {children}
    </AppShell>
  );
};
export default MainLayout;
