import { Grid, Group, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import HeaderNavbarMenuItems from "./HeaderNavbarMenuItems";
import { NavbarMenuType } from "../utils/const/types";
import { ROUTES } from "../utils/const/routes";

export interface IHeaderLayout {
  scrollY: any;
  currentPage: NavbarMenuType;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavbarMenuType>>;
}

const HeaderLayout: React.FC<IHeaderLayout> = ({
  scrollY = 0,
  currentPage
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(scrollY != 0);

  useEffect(() => {
    setIsScrolled(scrollY != 0);
  }, [scrollY]);

  return (
    <div className="relative z-[100] ">
      <Group
        className={`${
          !isScrolled
            ? "bg-white border-white"
            : "bg-white !border-secondary-500 shadow-[0_0_20px_4px_rgba(0,0,0,0.125)]"
        } px-3 py-4 transition-all ease-linear duration-200 gap-4 mx-auto border w-full justify-between`}
      >
        <Text
          variant="gradient"
          gradient={{ from: "#B6076A", to: "#603991", deg: 0 }}
          className="font-alkatra-semibold text-[22px] ml-8"
        >
          Self Acceptance
        </Text>
        <Group>
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
            href={`/${ROUTES.anxietyTest}`}
            isScrolled={isScrolled}
            label="Tes Kecemasan"
            isActive={currentPage == ROUTES.anxietyTest}
          />
          <HeaderNavbarMenuItems
            href={`/${ROUTES.anxietyClass}`}
            isScrolled={isScrolled}
            label="Tingkat Kecemasan"
            isActive={currentPage == ROUTES.anxietyClass}
          />
        </Group>
      </Group>
    </div>
  );
};
export default HeaderLayout;
