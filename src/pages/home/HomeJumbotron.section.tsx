import {
  Image,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React from "react";
import uinLogo from "../../assets/images/uin-logo.png";


export interface IHomeJumbotron {}

const HomeJumbotron: React.FC<IHomeJumbotron> = ({}) => {
  const theme = useMantineTheme();
  return (
    <Stack className="mt-20 self-center pb-10 mb-20 w-full gap-0">
      <Stack className="self-center bg-backgroundImg2 bg-contain bg-center bg-no-repeat relative h-[550px] w-[95%]">
        <Stack className="relative self-end w-[62%] flex-col-reverse h-full">
          <Stack className="gap-10 z-10 w-full self-end">
            <Stack className="gap-0 items-center z-10 w-full pb-10">
              <Text className="font-poppins-semibold text-lg tracking-4 text-pastel-primary-text z-10 text-center bg-white/[0.75]">
                EST 2023
              </Text>
              <Text className="font-poppins-semibold text-[60px] tracking-4 text-pastel-primary-text z-10 text-center bg-white/[0.75]">
                KUESIONER
              </Text>
              <Text className="font-poppins-semibold text-[60px] tracking-4 text-pastel-primary-text z-10 text-center bg-white/[0.75] -mt-4">
                KECEMASAN SOSIAL
              </Text>
              <Text className="font-poppins-semibold text-[60px] tracking-4 text-pastel-primary-text z-10 text-center bg-white/[0.75] -mt-4">
                PADA SISWA SMA
              </Text>
              <Text className="font-poppins-semibold text-xl tracking-4 text-pastel-primary-text z-10 text-center bg-white/[0.75]">
                BERBASIS WEBSITE
              </Text>
            </Stack>
          </Stack>
        </Stack>
        {/* <div className="bg-pastel-blue-black w-[450px] h-[450px] rounded-3xl mt-8 absolute -z-40 top-14 right-[72px]"></div> */}
      </Stack>
      <Stack className="bg-primaryDarkBlue px-20 py-2">
        <div className="self-end w-32">
          <Image src={uinLogo} />
        </div>
      </Stack>
    </Stack>
  );
};
export default HomeJumbotron;
