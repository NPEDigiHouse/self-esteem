import { Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { FileCheckIcon } from "../../assets/icons/Fluent";

export interface IPersonalityTestInformation {}

const PersonalityTestInformation: React.FC<
  IPersonalityTestInformation
> = ({}) => {
  return (
    <Stack className="gap-0 mt-20 w-[75%] self-center">
      <Group className="gap-2">
        <FileCheckIcon size={32} color="#603991" />
        <Text className="font-roboto-semibold text-2xl text-primary-text-500 ">
          Instruksi Tes
        </Text>
      </Group>
      <Text className="text-lg text-primary-text-500 tracking-4 mt-4">
        Terdapat total 42 pertanyaan yang dibagi menjadi 4 tipe: Kekuatan,
        Keberartian, Kebajikan dan Kemampuan Diri. Masing-masing pertanyaan
        mempunyai 4 pilihan:
      </Text>
      <Grid className="mt-4">
        <Grid.Col span={12} sm={6}>
          <Group className="flex-nowrap">
            <Text
              className={`w-16 h-16 text-center font-semibold text-white flex items-center justify-center bg-answer-gradient-50`}
            >
              SS
            </Text>
            <Text className="text-primary-text-500">Sangat Setuju</Text>
          </Group>
        </Grid.Col>

        <Grid.Col span={12} sm={6}>
          <Group className="flex-nowrap">
            <Text
              className={`w-16 h-16 text-center font-semibold text-white flex items-center justify-center bg-answer-gradient-300`}
            >
              S
            </Text>
            <Text className="text-primary-text-500">Setuju</Text>
          </Group>
        </Grid.Col>

        <Grid.Col span={12} sm={6}>
          <Group className="flex-nowrap">
            <Text
              className={`w-16 h-16 text-center font-semibold text-white flex items-center justify-center bg-answer-gradient-500`}
            >
              KS
            </Text>
            <Text className="text-primary-text-500">Kurang Setuju</Text>
          </Group>
        </Grid.Col>

        <Grid.Col span={12} sm={6}>
          <Group className="flex-nowrap">
            <Text
              className={`w-16 h-16 text-center font-semibold text-white flex items-center justify-center bg-answer-gradient-800`}
            >
              TS
            </Text>
            <Text className="text-primary-text-500">Tidak Setuju</Text>
          </Group>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default PersonalityTestInformation;
