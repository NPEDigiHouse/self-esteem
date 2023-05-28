import { Grid, Group } from "@mantine/core";
import React, { useEffect, useState } from "react";
import HeaderNavbarMenuItems from "./HeaderNavbarMenuItems";
import { NavbarMenuType } from "../utils/const/types";
import { ROUTES } from "../utils/const/routes";

export interface IHeaderLayout {
  scrollY: any;
  currentPage: NavbarMenuType;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavbarMenuType>>;
}

const HeaderLayout: React.FC<IHeaderLayout> = ({ scrollY = 0, currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(scrollY != 0);

  useEffect(() => {
    setIsScrolled(scrollY != 0);
  }, [scrollY]);

  return (
    <div className="relative z-[100] ">
      <div className="fixed top-4 w-full ">
          <Group
            className={`${
              !isScrolled ? "bg-transparent border-white" : "bg-white/[0.925] !border-secondary-500 shadow-[0_0_20px_4px_rgba(0,0,0,0.125)]"
            } px-3 py-2 transition-all ease-linear duration-200 rounded-full justify-evenly w-fit gap-8 mx-auto border `}
          >
            <HeaderNavbarMenuItems
              href={`/${ROUTES.home}`}
              isScrolled={isScrolled}
              label="Home"
              // onClick={() => {
              //   setCurrentPage("");
              // }}
              isActive={currentPage == ROUTES.home}
            />
            <HeaderNavbarMenuItems
              href={`/${ROUTES.personalityTest}`}
              isScrolled={isScrolled}
              label="Personality Test"
              isActive={currentPage == ROUTES.personalityTest}
            />
            <HeaderNavbarMenuItems
              href={`/${ROUTES.personalityType}`}
              isScrolled={isScrolled}
              label="Personality Type"
              isActive={currentPage == ROUTES.personalityType}
            />
            {/* <HeaderNavbarMenuItems
              href="/"
              isScrolled={isScrolled}
              label="Contact"
              isActive={currentPage == "contact"}
            /> */}
          </Group>
      </div>
    </div>
  );
};
export default HeaderLayout;
