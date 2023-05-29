import { Stack } from "@mantine/core";
import React from "react";
import ParagraphWithImage from "../../components/ParagraphWithImage.component";
import MainLayout from "../../layouts/MainLayout.layout";
import HomeJumbotron from "./HomeJumbotron.section";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  return (
    <MainLayout>
      <Stack className="">
        <HomeJumbotron />
        <ParagraphWithImage
          primaryTitle="Kenapa Tes Kecemasan"
          secondaryTitle="Sebuah Keharusan ?"
          paragraph="Tes kecemasan penting karena membantu menentukan tingkat kecemasan seseorang, meningkatkan kesadaran diri tentang gejala kecemasan, memulai percakapan tentang kesejahteraan mental, mengidentifikasi strategi pengelolaan yang efektif, dan meningkatkan kualitas hidup dengan mengatasi kecemasan secara optimal."
        />
        {/* <div className="h-[1000px]"></div> */}
      </Stack>
    </MainLayout>
  );
};
export default Home;
