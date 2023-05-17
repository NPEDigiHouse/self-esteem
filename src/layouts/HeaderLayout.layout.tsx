import { Grid, Group } from "@mantine/core";
import React, { useEffect, useState } from "react";
import HeaderNavbarMenuItems from "./HeaderNavbarMenuItems";
import { NavbarMenuType } from "../utils/const/types";

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
    <div className="relative z-[100]">
      <div className="fixed top-4 w-full">
          <Group
            className={`${
              !isScrolled ? "bg-transparent" : "bg-white/[0.925]"
            } px-4 py-3 transition-all ease-linear duration-200 rounded-full justify-evenly w-fit gap-8 mx-auto`}
          >
            <HeaderNavbarMenuItems
              href="/"
              isScrolled={isScrolled}
              label="Home"
              // onClick={() => {
              //   setCurrentPage("");
              // }}
              isActive={currentPage == ""}
            />
            <HeaderNavbarMenuItems
              href="/"
              isScrolled={isScrolled}
              label="Personality Test"
              isActive={currentPage == "personality-test"}
            />
            <HeaderNavbarMenuItems
              href="/personality-type"
              isScrolled={isScrolled}
              label="Personality Type"
              isActive={currentPage == "personality-type"}
            />
            <HeaderNavbarMenuItems
              href="/"
              isScrolled={isScrolled}
              label="Contact"
              isActive={currentPage == "contact"}
            />
          </Group>
      </div>
    </div>
  );
};
export default HeaderLayout;
