import { Stack, Text } from "@mantine/core";
import React from "react";
import { NormalAnxietyIcon, NotAnxietyIcon, ResultAnxietyIcon } from "../assets/icons/Fluent";
import { TestResult } from "../utils/const/types";

export interface IPersonalityTypeCard {
  anxietyLevel: TestResult;
  title?: string;
  description?: string;
}

const PersonalityTypeCard: React.FC<IPersonalityTypeCard> = ({
  anxietyLevel,
  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, enim aut quaerat obcaecati assumenda corporis magnam reprehenderit quibusdam vitae nemo!"
}) => (
  <Stack className="bg-white rounded-xl p-2 border border-secondary-500 shadow-xl">
    <div className="flex overflow-visible items-center justify-center bg-secondary-400 rounded-full">
          {anxietyLevel === "Rendah" ? (
            <NotAnxietyIcon size={300} className="self-center " />
          ) : anxietyLevel === "Sedang" ? (
            <NormalAnxietyIcon size={300} className="self-center " />
          ) : (
            <ResultAnxietyIcon size={300} className="self-center " />
          )}
    </div>
    <Text className="font-roboto-semibold text-primary-text-500 text-xl text-center">{anxietyLevel}</Text>
    <Stack className="gap-0">
      <Text className="text-primary-text-500 text-justify px-4 pb-4">
        {description}
      </Text>
    </Stack>
  </Stack>
);
export default PersonalityTypeCard;
