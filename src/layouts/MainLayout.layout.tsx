import { AppShell } from "@mantine/core";
import React from "react";
import HeaderLayout from "./HeaderLayout.layout";
import { useWindowScrollPositions } from "../hooks/useWindowScrollPositions";
import FooterLayout from "./FooterLayout.layout";

export interface IMainLayout {
  children: JSX.Element;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const { scrollX, scrollY } = useWindowScrollPositions();
  console.log(scrollY, "scrollY");
  return (
    <AppShell
      padding={0}
      header={<HeaderLayout scrollY={scrollY} />}
      className={""}
      footer={<FooterLayout />}
    >
      {children}
    </AppShell>
  );
};
export default MainLayout;
