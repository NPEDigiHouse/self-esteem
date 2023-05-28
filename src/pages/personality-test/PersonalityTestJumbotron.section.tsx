import { Grid, Group, Stack, Stepper, Text } from "@mantine/core";
import React from "react";
import {
  AnxietyPersonIcon,
  DescriptionIcon,
  InsightIcon,
  PersonalitySearchGradientIcon,
  PersonalitySearchIcon,
  SearchIcon
} from "../../assets/icons/Fluent";

export interface IPersonalityTestJumbotron {}

const PersonalityTestJumbotron: React.FC<IPersonalityTestJumbotron> = ({}) => {
  return (
    <Stack className="mt-28 w-[80%] self-center overflow-hidden">
      <Grid className=" ">
        <Grid.Col span={7} className="flex pr-10">
          <Stack className="w-fit align-middle h-fit self-center">
            <Text className="font-poppins-semibold text-[54px] text-pastel-primary-text z-10">
              Tes Kecemasan
            </Text>
            <Text className="text-xl text-primary-text-500 tracking-4 text-justify">
              Anda akan diarahkan untuk menjawab total 45 pertanyaan yang
              masing-masing memiliki 4 pilihan jawaban. Pilih jawaban yang
              paling sesuai dengan perasaan dan pengalaman pribadi Anda karena
              pilihan jawaban Anda akan memberikan kontribusi terhadap hasil
              akhir
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={5}>
          <AnxietyPersonIcon size={400} />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default PersonalityTestJumbotron;
