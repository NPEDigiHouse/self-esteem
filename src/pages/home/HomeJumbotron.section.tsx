import { Button, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import uinLogo from "../../assets/images/uin-logo.png";
import { ArrowRightAltIcon, SearchIconBold } from "../../assets/icons/Fluent";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";

export interface IHomeJumbotron {}

const HomeJumbotron: React.FC<IHomeJumbotron> = ({}) => {
  const theme = useMantineTheme();
  return (
    <Stack className="self-center pb-10 mb-20 w-full gap-0">
      <Stack className="self-center bg-bg1 bg-cover bg-center relative w-fit">
        <Stack className="gap-10 w-[65%] px-10 self-start ml-16 z-10 my-16 py-10 bg-white/[0.9] ">
          <Stack className="gap-0 items-center z-10">
            <Text className="font-roboto text-[44px] text-primary-text-500 z-10 text-center rounded-xl">
              Temukan{" "}
              <span className="font-bold text-sc-cp-700">
                Kekuatan Dalam Diri
              </span>
              , Wujudkan Potensi Sejati!
            </Text>
          </Stack>
          <Text className="text-[18px] self-center mx-8 text-center tracking-4 text-primary-text-500 z-10 rounded-b-xl">
            Website ini dirancang khusus untuk membantu Anda memahami dan
            mengukur tingkat kepercayaan diri Anda. Tes self-esteem kami terdiri
            dari 45 pertanyaan yang dirancang secara cermat untuk memperoleh
            wawasan mendalam tentang diri Anda.
          </Text>
          <Button
            className="bg-transparent hover:bg-transparent border-sc-cp-900 border text-sc-cp-900 w-full -z-10 rounded-md px-10 !h-12 text-[18px] self-center font-roboto font-normal"
            leftIcon={
              <SearchIconBold
                size={28}
                className="mt-[2px]"
                color={theme.colors['sc-cp'][9]}
              />
            }
            component={Link}
            to={ROUTES.anxietyTest}
          >
            Tes Self-Esteem Sekarang
          </Button>
        </Stack>
        {/* <div className="bg-pastel-blue-black w-[450px] h-[450px] rounded-3xl mt-8 absolute -z-40 top-14 right-[72px]"></div> */}
      </Stack>
    </Stack>
  );
};
export default HomeJumbotron;
