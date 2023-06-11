import { Stack } from "@mantine/core";
import React from "react";
import ParagraphWithImage2 from "../../components/ParagraphWithImage2.component";
import MainLayout from "../../layouts/MainLayout.layout";
import HomeExplore from "./HomeExplore.section";
import HomeJumbotron from "./HomeJumbotron.section";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
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
        <ParagraphWithImage2
          secondaryTitle="Apa itu Self-Esteem ?"
          paragraph="Self-esteem atau keberhargaan diri adalah penilaian dan sikap yang kita miliki terhadap diri sendiri. Ini melibatkan keyakinan, penghargaan, dan perasaan yang kita rasakan tentang nilai diri kita sendiri. Tingkat self-esteem yang sehat sangat penting dalam membentuk citra diri kita dan pengaruhnya terhadap kehidupan sehari-hari. "
          paragraph2="Penting untuk diingat bahwa self-esteem dapat berkembang dan berubah seiring waktu. Dengan pemahaman yang lebih baik tentang self-esteem dan upaya untuk memperkuatnya, kita dapat membangun kepercayaan diri yang lebih sehat dan positif. Tes self-esteem kami dirancang untuk membantu Anda mengidentifikasi tingkat self-esteem Anda dan memberikan panduan serta saran untuk meningkatkannya. Dengan meningkatkan self-esteem, Anda dapat mencapai potensi terbaik Anda, mengatasi rintangan, dan hidup dengan lebih percaya diri dan bahagia."
        />
        <HomeExplore />
      </Stack>
    </MainLayout>
  );
};
export default Home;
