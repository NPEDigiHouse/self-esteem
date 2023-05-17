import { Button, Grid, Stack, Text } from "@mantine/core";
import React from "react";
import { SearchIcon } from "../../assets/icons/Fluent";
import VerticalDivider from "../../components/VerticalDivider.component";
import MainLayout from "../../layouts/MainLayout.layout";
import PersonalityTypeList from "./PersonalityTypeList.section";
import PersonalityTypeJumbotron from "./PersonalityTypeJumbotron.section";

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
