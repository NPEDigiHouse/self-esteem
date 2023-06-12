import { Group, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { ROUTES } from "../utils/const/routes";
import { NavbarMenuType } from "../utils/const/types";
import HeaderNavbarMenuItems from "./HeaderNavbarMenuItems";

export interface IHeaderLayout {
  currentPage: NavbarMenuType;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavbarMenuType>>;
}

const HeaderLayout: React.FC<IHeaderLayout> = ({
  currentPage
}) => {

  const theme= useMantineTheme();

  return (
    <div className="relative z-[100] ">
      <Group
        className={` bg-white border-white px-3 py-4 transition-all ease-linear duration-200 gap-4 mx-auto border w-full justify-between`}
      >
        <Text
          variant="gradient"
          gradient={{ from: theme.colors['sc-cp'][9], to: theme.colors['sc-cp'][6], deg: 0 }}
          className="font-alkatra-semibold text-[24px] ml-8"
        >
          Self Esteem
        </Text>
        <Group className="sm:mr-10 flex-nowrap justify-center mx-auto gap-2 sm:gap-4">
          <HeaderNavbarMenuItems
            href={`/${ROUTES.home}`}
            label="Beranda"
            // onClick={() => {
            //   setCurrentPage("");
            // }}
            isActive={currentPage == ROUTES.home}
          />
          <HeaderNavbarMenuItems
            href={`/${ROUTES.anxietyTest}`}
            label="Kuesioner Self Esteem"
            isActive={currentPage == ROUTES.anxietyTest}
          />
          {/* <HeaderNavbarMenuItems
            href={`/${ROUTES.anxietyClass}`}
            isScrolled={isScrolled}
            label="Tingkat Kecemasan"
            isActive={currentPage == ROUTES.anxietyClass}
          /> */}
          <HeaderNavbarMenuItems
            href={`/${ROUTES.deril}`}
            label="Tingkat Self Esteem"
            isActive={currentPage == ROUTES.deril}
          /> 
        </Group>
      </Group>
    </div>
  );
};
export default HeaderLayout;
