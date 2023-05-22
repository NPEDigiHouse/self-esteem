import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import AnswerCircle from "../../components/AnswerCircle.component";
import DotDivider from "../../components/DotDivider.component";

export interface IPersonalityTestInformation {}

const PersonalityTestInformation: React.FC<
  IPersonalityTestInformation
> = ({}) => {
  return (
    <Stack className="self-center rounded-full w-[80%] justify-center mt-40">
      <Text className="text-center self-center font-poppins text-xl">About the Option</Text>
      <Group className="self-center bg-pastel-blue-light-50 justify-center gap-8 rounded-full py-2 px-10">
        <Group className="flex-nowrap gap-2">
          <AnswerCircle clickable={false} />
          <Text className="font- text-lg text-primary-text-500">Disagree</Text>
        </Group>
        <DotDivider />
        <Group className="flex-nowrap gap-2">
          <AnswerCircle clickable={false} />
          <Text className="font- text-lg text-primary-text-500">Natural</Text>
        </Group>
        <DotDivider />
        <Group className="flex-nowrap gap-2">
          <AnswerCircle clickable={false} />
          <Text className="font- text-lg text-primary-text-500">Agree</Text>
        </Group>
      </Group>
    </Stack>
  );
};
export default PersonalityTestInformation;
