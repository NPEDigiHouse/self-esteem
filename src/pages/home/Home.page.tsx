import { Group, Stack } from "@mantine/core";
import React from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import Jumbotron from "./Jumbotron.section";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  return (
    <MainLayout>
      <Stack className="">
        <Jumbotron />
        <div className="h-[1000px]"></div>
      </Stack>
    </MainLayout>
  );
};
export default Home;
