import { Button, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { SearchIconBold } from "../../assets/icons/Fluent";
import { ROUTES } from "../../utils/const/routes";

export interface IHomeJumbotron {}

const HomeJumbotron: React.FC<IHomeJumbotron> = ({}) => {
  const theme = useMantineTheme();
  return (
    <Stack className="self-center pb-10 mb-10 md:mb-20 w-full gap-0">
      <Stack className="self-center bg-bg1 bg-cover bg-center relative w-fit">
        <Stack className="gap-6 sm:gap-10 w-[90%] sm:w-[75%] md:w-[65%] px-4 sm:px-10 self-start mx-auto sm:ml-16 z-10 my-4 sm:my-16 py-10 sm:py-10 bg-white/[0.9] ">
          <Stack className="gap-0 items-center z-10">
            <Text className="font-roboto text-[28px] md:text-[44px] text-primary-text-500 z-10 text-center rounded-xl">
              Temukan{" "}
              <span className="font-bold text-sc-cp-600">
                Kekuatan Dalam Diri
              </span>
              , Wujudkan Potensi Sejati!
            </Text>
          </Stack>
          <Text className="text-lg md:text-[18px] self-center mx-2 md:mx-8 text-center tracking-4 text-primary-text-500 z-10 rounded-b-xl">
            Website ini dirancang khusus untuk membantu Anda memahami dan
            mengukur tingkat kepercayaan diri Anda. Tes self-esteem kami terdiri
            dari 42 pertanyaan yang dirancang secara cermat untuk memperoleh
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
