import { Button, Stack, Stepper, useMantineTheme, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightAltIcon, DescriptionIcon, InsightIcon, SearchIcon } from "../../assets/icons/Fluent";
import ParagraphWithImage from "../../components/ParagraphWithImage.component";
import MainLayout from "../../layouts/MainLayout.layout";
import { ROUTES } from "../../utils/const/routes";
import HomeJumbotron from "./HomeJumbotron.section";
import HomeExplore from "./HomeExplore.section";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  const theme = useMantineTheme();
  return (
    <MainLayout>
      <Stack className="">
        <HomeJumbotron />
        {/* <Stack className="mb-72 w-[80%] self-center z-20">
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
                <Stack className="min-w-[280px] mx-auto bg-secondary-300 p-4 rounded-md border-2 border-secondary-500">
                  <Text className=" text-center text-lg font-roboto min-h-[50px]">
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
                <Stack className="min-w-[280px] mx-auto bg-secondary-300 p-4 rounded-md border-2 border-secondary-500">
                  <Text className=" text-center text-lg font-roboto min-h-[50px]">
                    Dapatkan Informasi Tentang Tingkat Kecemasan
                  </Text>

                  <Text className="text-primary-text-500 tracking-4 text-lg text-justify min-h-[124px]">
                    Hasil akhir yang Anda peroleh akan dikategorikan dalam tiga
                    kelompok: tingkat kecemasan rendah, tingkat kecemasan
                    sedang, dan tingkat kecemasan tinggi.
                  </Text>
                </Stack>
              }
            />
            <Stepper.Step
              icon={<InsightIcon size={28} />}
              label={
                <Stack className="min-w-[280px] mx-auto bg-secondary-300 p-4 rounded-md border-2 border-secondary-500">
                  <Text className=" text-center text-lg font-roboto min-h-[50px]">
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
        </Stack> */}
        <ParagraphWithImage
          primaryTitle=""
          // primaryTitle="Kata Pengantar"
          // secondaryTitle=""
          secondaryTitle="Kata Pengantar"
          paragraph="Berikut ini terdapat pernyataan-pernyataan yang berkenaan dengan skala kecemasan sosial siswa. Inventori ini bertujuan untuk penelitian kecemasan sosial siswa SMA guna menguji baliditas dan reliabilitas dari inventori berbasis web yang dikembangkan oleh kelompok. Disamping ini penelitian ini juga bertujuan untuk mengetahui tingkat kecemasan sosial yang dimiliki oleh siswa SMA. Hasil pengisian inventori ini hanya untuk kepentingan ilmiah dan tidak akan berpengaruh terhadap prestasi Anda di sekolah ini. Hal-hal yang bersifat pribadi akan dijaga kerahasiaannya oleh peneliti. Silahkan mengisi sesuai dengan keadaan Anda saat ini. Peneliti ucapkan terima kasih atas partisipasi Anda dalam mengisi inventori ini."
        />
        <HomeExplore />

      </Stack>
    </MainLayout>
  );
};
export default Home;
