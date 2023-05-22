import { Stack } from "@mantine/core";
import React from "react";
import ParagraphWithImage from "../../components/ParagraphWithImage.component";
import MainLayout from "../../layouts/MainLayout.layout";
import Jumbotron from "./HomeJumbotron.section";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  return (
    <MainLayout>
      <Stack className="">
        <Jumbotron />
        <ParagraphWithImage
          primaryTitle="So.. Why"
          secondaryTitle="We Need This ?"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusantium optio at velit, consequatur voluptas corporis dolor in a odit, repellat asperiores fuga soluta! Nesciunt animi laborum eum assumenda exercitationem."
        />
        {/* <div className="h-[1000px]"></div> */}
      </Stack>
    </MainLayout>
  );
};
export default Home;
