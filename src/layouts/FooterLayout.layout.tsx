import { Divider, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import uinLogo from "../assets/images/uin-logo.png";
import { ROUTES } from "../utils/const/routes";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  const theme= useMantineTheme();
  return (
    <Stack className="bg-primary-text-600 py-8 mt-32">
      
      {/* <Divider color={theme.colors['secondary-text'][5]} /> */}

      <Text className="text-white text-lg text-center tracking-4">
        &copy; 2023 UIN Satu Tulungagung - All rights reserved
      </Text>
    </Stack>
  );
};

export default FooterLayout;
