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
  SearchIcon
} from "../../assets/icons/Fluent";
import { ROUTES } from "../../utils/const/routes";

export interface IJumbotron {}

const Jumbotron: React.FC<IJumbotron> = ({}) => {
  const theme= useMantineTheme();
  return (
    <Stack className="gap-0 mb-40">
      <div className="w-[106px] ml-10 mt-3">
        <Image src={tkIcon} className="" />
      </div>
      <Stack className="mt-16 self-center bg-white">
        <Stack className="gap-10 w-[60%] self-center">
          <Stack className="gap-0 items-center">
            <Text className="font-poppins-semibold text-[40px] text-pastel-primary-text z-10 text-center">
              “Taklukkan <span className="font-bold text-primaryBlue">Kecemasan</span>, Temukan Keseimbangan Hidupmu.”
            </Text>
          </Stack>
          <Text className="text-[18px] self-center mx-8 text-center tracking-4 text-primary-text-500">
            Selamat datang di website Tes Kecemasan! Website ini dirancang
            khusus untuk membantu Anda mengidentifikasi tingkat kecemasan Anda.
            Kami menyediakan 45 pertanyaan yang dirancang secara cermat untuk
            memahami perasaan dan pikiran Anda terkait kecemasan.
          </Text>
          <Button
            className="bg-primaryDarkBlue hover:bg-primaryDarkBlue rounded-full px-10 w-fit !h-12 text-[18px] self-center font-normal"
            rightIcon={<ArrowRightAltIcon size={28} className="mt-[2px]" color={"#FFFFFF"} />}
            component={Link}
            to={ROUTES.personalityTest}
          >
            Mulai Tes Kecemasan
          </Button>
        </Stack>
      </Stack>
      <Stack className="mt-20 mb-40 w-[80%] self-center">
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
              backgroundColor: theme.colors['secondary'][5]
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
                  Informasi tentang tingkat kecemasan ini akan membantu Anda untuk lebih memahami kondisi
                  kecemasan Anda sendiri.
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
export default Jumbotron;
