import { Grid, Group } from "@mantine/core";
import React, { useEffect, useState } from "react";
import HeaderNavbarMenuItems from "./HeaderNavbarMenuItems";

export interface IHeaderLayout {
  scrollY: any;
}

const HeaderLayout: React.FC<IHeaderLayout> = ({ scrollY = 0 }) => {
  const [currentPage, setCurrentPage] = useState("Home");

  const [isScrolled, setIsScrolled] = useState<boolean>(scrollY != 0);

  useEffect(() => {
    setIsScrolled(scrollY != 0);
  }, [scrollY]);

  return (
    <div className="relative z-[100]">
      <Grid className=" fixed top-10 w-full">
        <Grid.Col span={7}>
          <Group
            className={`${
              !isScrolled ? "bg-transparent" : "bg-white/[0.925]"
            } px-4 py-3 transition-all ease-linear duration-200 rounded-full justify-evenly w-fit gap-8 mx-auto`}
          >
            <HeaderNavbarMenuItems
              href="/"
              isScrolled={isScrolled}
              label="Home"
              onClick={() => {
                setCurrentPage("Home");
              }}
              isActive={currentPage == "Home"}
            />
            <HeaderNavbarMenuItems
              href="/"
              isScrolled={isScrolled}
              label="Personality Test"
              onClick={() => {
                setCurrentPage("Personality Test");
              }}
              isActive={currentPage == "Personality Test"}
            />
            <HeaderNavbarMenuItems
              href="/"
              isScrolled={isScrolled}
              label="Personality Type"
              onClick={() => {
                setCurrentPage("Personality Type");
              }}
              isActive={currentPage == "Personality Type"}
            />
            <HeaderNavbarMenuItems
              href="/"
              isScrolled={isScrolled}
              label="Contact"
              onClick={() => {
                setCurrentPage("Contact");
              }}
              isActive={currentPage == "Contact"}
            />
          </Group>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default HeaderLayout;
