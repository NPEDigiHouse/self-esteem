import { Stack } from "@mantine/core";
import React from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import PersonalityTypeJumbotron from "./PersonalityTypeJumbotron.section";
import PersonalityTypeList from "./PersonalityTypeList.section";

export interface IPersonalityType {}

const PersonalityType: React.FC<IPersonalityType> = ({}) => {
  return (
    <MainLayout>
      <Stack>
        <PersonalityTypeJumbotron />
        <PersonalityTypeList />
      </Stack>
    </MainLayout>
  );
};
export default PersonalityType;
