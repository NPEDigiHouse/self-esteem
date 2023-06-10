import { AppShell } from "@mantine/core";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/app-context.context";
import { useWindowScrollPositions } from "../hooks/useWindowScrollPositions";
import { NavbarMenuType } from "../utils/const/types";
import FooterLayout from "./FooterLayout.layout";
import HeaderLayout from "./HeaderLayout.layout";

export interface IMainLayout {
  children: JSX.Element;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const { scrollY } = useWindowScrollPositions();
  const {currentPage, setCurrentPage} = useContext(AppContext);

  const location= useLocation();
  const currPath= location.pathname.substring(1);

  setCurrentPage(currPath as NavbarMenuType)

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
