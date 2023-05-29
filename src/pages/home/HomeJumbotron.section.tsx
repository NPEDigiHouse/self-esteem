import {
  Button,
  Image,
  Stack,
  Stepper,
  Text,
  useMantineTheme
} from "@mantine/core";
import React from "react";
import tkIcon from "../../assets/images/tk-icon.png";

import { Link } from "react-router-dom";
import {
  ArrowRightAltIcon,
  DescriptionIcon,
  InsightIcon,
  NormalAnxietyIcon,
  NotAnxietyIcon,
  ResultAnxietyIcon,
  ScaredPersonIcon,
  SearchIcon
} from "../../assets/icons/Fluent";
import { ROUTES } from "../../utils/const/routes";

export interface IHomeJumbotron {}

const HomeJumbotron: React.FC<IHomeJumbotron> = ({}) => {
  const theme = useMantineTheme();
  return (
    <Stack className="gap-0 mb-40">
      <div className="w-[120px] ml-10 mt-6 ">
        <Image src={tkIcon} className="" />
      </div>
      <Stack className="mt-6 self-center bg-secondary-400 relative pt-[72px] pb-10">
        {/* <div className="absolute z-0 left-20 top-20 overflow-hidden border-4 border-secondary-500 bg-secondary-400 rounded-full">
          <NormalAnxietyIcon size={160} className="self-center rounded-full -rotate-12" />
        </div>
        <div className="absolute z-0 right-14 -top-20 overflow-hidden border-4 border-secondary-500 bg-secondary-400 rounded-full">
          <NotAnxietyIcon size={160} className="self-center rounded-full rotate-12" />
        </div>
        <div className="absolute z-0 right-32 -bottom-10 overflow-hidden border-4 border-secondary-500 bg-secondary-400 rounded-full">
          <ResultAnxietyIcon size={160} className="self-center rounded-full rotate-[10deg]" />
        </div> */}
        {/* <div className="absolute z-0 right-52 bottom-0 bg-primaryGreen overflow-hidden rounded-full">
          <ScaredPersonIcon size={160} className="self-center rounded-full bg-error-50 rotate-12" />
        </div> */}
        <Stack className="gap-10 w-[60%] self-center z-10 ">
          <Stack className="gap-0 items-center z-10">
            <Text className="font-poppins-semibold text-[40px] text-pastel-primary-text z-10 text-center rounded-xl">
              “Taklukkan{" "}
              <span className="font-bold text-primaryBlue">Kecemasan</span>,
              Temukan Keseimbangan Hidupmu.”
            </Text>
          </Stack>
          <Text className="text-[18px] self-center mx-8 text-center tracking-4 text-primary-text-500 z-10 rounded-b-xl">
            Selamat datang di website Tes Kecemasan! Website ini dirancang
            khusus untuk membantu Anda mengidentifikasi tingkat kecemasan Anda.
            Kami menyediakan 45 pertanyaan yang dirancang secara cermat untuk
            memahami perasaan dan pikiran Anda terkait kecemasan.
          </Text>
          <Button
            className="bg-primaryDarkBlue hover:bg-primaryDarkBlue z-10 rounded-full px-10 w-fit !h-12 text-[18px] self-center font-normal"
            rightIcon={
              <ArrowRightAltIcon
                size={28}
                className="mt-[2px]"
                color={"#FFFFFF"}
              />
            }
            component={Link}
            to={ROUTES.anxietyTest}
          >
            Tes Kecemasan
          </Button>
        </Stack>
      </Stack>
      <Stack className="mt-10 mb-40 w-[80%] self-center z-20">
        <Stepper
          active={-1}
          breakpoint="sm"
          iconPosition="right"
          size="xl"
          styles={{
            steps: {
              display: "flex",
              alignItems: "center"
            },
            step: {
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 0,
              paddingBottom: 20,
              flexGrow: 1
            },
            stepBody: {
              marginRight: 0,
              marginTop: 30,
              top: 30,
              position: "absolute"
            },
            separator: {
              margin: 0,
              marginTop: -15,
              marginRight: "-7%",
              marginLeft: "-7%",
              backgroundColor: theme.colors["secondary"][5]
            }
          }}
          className=""
        >
          <Stepper.Step
            icon={<SearchIcon size={28} />}
            label={
              <Stack className="min-w-[280px] mx-auto bg-secondary-300 p-4 rounded-lg border-2 border-secondary-500">
                <Text className=" text-center text-lg font-poppins min-h-[50px]">
                  Lakukan Tes Kecemasan
                </Text>

                <Text className="text-primary-text-500 tracking-4 text-lg text-justify min-h-[124px]">
                  Lakukan tes selama 5 - 15 menit. Anda diminta untuk memilih
                  jawaban yang paling sesuai dengan perasaan dan pengalaman
                  pribadi Anda.
                </Text>
              </Stack>
            }
          />
          <Stepper.Step
            icon={<DescriptionIcon size={28} />}
            label={
              <Stack className="min-w-[280px] mx-auto bg-secondary-300 p-4 rounded-lg border-2 border-secondary-500">
                <Text className=" text-center text-lg font-poppins min-h-[50px]">
                  Dapatkan Informasi Tentang Tingkat Kecemasan
                </Text>

                <Text className="text-primary-text-500 tracking-4 text-lg text-justify min-h-[124px]">
                  Hasil akhir yang Anda peroleh akan dikategorikan dalam tiga
                  kelompok: tingkat kecemasan rendah, tingkat kecemasan sedang,
                  dan tingkat kecemasan tinggi.
                </Text>
              </Stack>
            }
          />
          <Stepper.Step
            icon={<InsightIcon size={28} />}
            label={
              <Stack className="min-w-[280px] mx-auto bg-secondary-300 p-4 rounded-lg border-2 border-secondary-500">
                <Text className=" text-center text-lg font-poppins min-h-[50px]">
                  Atasi Kecemasan Anda
                </Text>

                <Text className="text-primary-text-500 tracking-4 text-lg text-justify min-h-[124px]">
                  Informasi tentang tingkat kecemasan ini akan membantu Anda
                  untuk lebih memahami kondisi kecemasan Anda sendiri.
                </Text>
              </Stack>
            }
          />
        </Stepper>
      </Stack>
      {/* <div className="bg-pastel-blue-black w-[450px] h-[450px] rounded-3xl mt-8 absolute -z-40 top-14 right-[72px]"></div> */}
    </Stack>
  );
};
export default HomeJumbotron;
