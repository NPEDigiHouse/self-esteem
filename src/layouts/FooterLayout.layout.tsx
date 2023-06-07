import { Divider, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import uinLogo from "../assets/images/uin-logo.png";
import { ROUTES } from "../utils/const/routes";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  const theme= useMantineTheme();
  return (
    <Stack className="bg-primary-text-500 pb-4 pt-8 mt-32 border-t-[6px] border-t-primaryGreen">
      <Group className="self-center gap-10">
        <div className="w-[80px]">
          <Image src={uinLogo} className="" />
        </div>
        {/* <DotDivider />
        <Stack className="gap-1">
          <Text className="self-center text-[18px] font-poppins text-white">
            Find Us On
          </Text>
          <Group className="gap-4">
            <a
              href="https://web.facebook.com/kitabanyorang/?_rdc=1&_rdr"
              target={"_blank"}
              className="p-[6px] h-[42px] w-[42px] rounded-full hover:bg-primaryGreen transition-all bg-primaryGreen"
            >
              <FacebookIcon color="#FFFFFF" size={26} className="mx-auto mt-[2px]" />
            </a>
            <a
              href="https://www.instagram.com/kknt109_banyorang/"
              target={"_blank"}
              className="p-2 h-[42px] w-[42px] rounded-full hover:bg-primaryGreen transition-all bg-primaryGreen"
            >
              <InstagramIcon color="#FFFFFF" size={26} className="mx-auto" />
            </a>
            <a
              href="https://www.google.com/maps/place/Banyorang,+Tompobulu,+Bantaeng+Regency,+South+Sulawesi/@-5.4628325,120.0316885,14z/data=!3m1!4b1!4m5!3m4!1s0x2dbeae8d7db5888b:0x6fad451a5622546f!8m2!3d-5.4630263!4d120.0347441"
              target={"_blank"}
              className="p-1 h-[42px] w-[42px] rounded-full hover:bg-primaryGreen transition-all bg-primaryGreen"
            >
              <LocationIcon color="#FFFFFF" size={28} className="mx-auto mt-[2px]" />
            </a>
          </Group>
        </Stack> */}
      </Group>
      <Group className="gap-10 self-center mt-2">
        <Link to={"/"} className="font-semibold tracking-[0.05em] text-white">
          Home
        </Link>
        <Link to={"/"+ROUTES.anxietyTest} className="font-semibold tracking-[0.05em] text-white">
          Tes Kecemasan
        </Link>
        <Link to={"/"+ROUTES.anxietyClass} className="font-semibold tracking-[0.05em] text-white">
          Tingkat Kecemasan
        </Link>
        {/* <Link to={"/personality-type"} className="font-semibold tracking-[0.05em]">
          Contact
        </Link> */}
      </Group>
      <Divider color={theme.colors['secondary-text'][5]} />

      <Text className="text-white text-lg text-center mt-1 tracking-4">
        &copy; 2023 UIN Satu Tulungagung - All rights reserved
      </Text>
    </Stack>
  );
};

export default FooterLayout;
