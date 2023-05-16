import { Divider, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import personaLogo from "../assets/images/persona-logos.png";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon
} from "../assets/icons/Fluent";
import VerticalDivider from "../components/VerticalDivider.component";
import { Link } from "react-router-dom";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  const theme= useMantineTheme();
  return (
    <Stack className="bg-secondary-900 pb-4 pt-8 mt-10">
      <Group className="self-center gap-14">
        <div className="w-[120px] mr-4">
          <Image src={personaLogo} className="" />
        </div>
        <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
        <Stack className="gap-1">
          <Text className="self-center text-[18px] font-poppins">
            Find Us On
          </Text>
          <Group className="gap-4">
            <a
              href="https://web.facebook.com/kitabanyorang/?_rdc=1&_rdr"
              target={"_blank"}
              className="p-[6px] rounded-full hover:bg-primaryGreen transition-all"
            >
              <FacebookIcon color="#FFFFFF" size={32} />
            </a>
            <a
              href="https://www.instagram.com/kknt109_banyorang/"
              target={"_blank"}
              className="p-2 rounded-full hover:bg-primaryGreen transition-all"
            >
              <InstagramIcon color="#FFFFFF" size={28} />
            </a>
            <a
              href="https://www.google.com/maps/place/Banyorang,+Tompobulu,+Bantaeng+Regency,+South+Sulawesi/@-5.4628325,120.0316885,14z/data=!3m1!4b1!4m5!3m4!1s0x2dbeae8d7db5888b:0x6fad451a5622546f!8m2!3d-5.4630263!4d120.0347441"
              target={"_blank"}
              className="p-1 rounded-full hover:bg-primaryGreen transition-all"
            >
              <LocationIcon color="#FFFFFF" size={34} />
            </a>
          </Group>
        </Stack>
      </Group>
      <Group className="gap-10 self-center mt-4">
        <Link to={"/"} className="font-semibold tracking-[0.05em]">
          Home
        </Link>
        <Link to={"/"} className="font-semibold tracking-[0.05em]">
          Personality Test
        </Link>
        <Link to={"/"} className="font-semibold tracking-[0.05em]">
          Personality Type
        </Link>
        <Link to={"/"} className="font-semibold tracking-[0.05em]">
          Contact
        </Link>
      </Group>
      <Divider color={theme.colors['secondary-text'][5]} />

      <Text className="text-white text-md text-center mt-1">
        &copy; 2023 Persona - All rights reserved
      </Text>
    </Stack>
  );
};

export default FooterLayout;
