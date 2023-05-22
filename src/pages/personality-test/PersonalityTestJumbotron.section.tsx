import { Group, Stack, Stepper, Text } from "@mantine/core";
import React from "react";
import {
  DescriptionIcon,
  InsightIcon,
  PersonalitySearchIcon,
  SearchIcon
} from "../../assets/icons/Fluent";

export interface IPersonalityTestJumbotron {}

const PersonalityTestJumbotron: React.FC<IPersonalityTestJumbotron> = ({}) => {
  return (
    <Stack className="mt-28 w-[80%] self-center">
      <Group className="flex-nowrap gap-20 bg-white justify-center">
        <Stack>
          <Text className="font-poppins-semibold text-[54px] text-pastel-primary-text z-10">
            Personality Test
          </Text>
          <Text className="text-xl text-primary-text-500 tracking-4">
            Test your personality type, and discover yourself
          </Text>
        </Stack>
        <PersonalitySearchIcon size={320} />
      </Group>
      <Stack className="mt-10 mb-40">
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
              marginLeft: "-7%"
            }
          }}
        >
          <Stepper.Step
            icon={<SearchIcon size={28} />}
            label={
              <Stack className="w-3/4 mx-auto">
                <Text className=" bg-white text-center text-lg font-poppins min-h-[50px]">
                  Do a Personality Test
                </Text>

                <Text className="text-start tracking-4 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta adipisci aperiam quasi rem libero minus itaque
                  similique, fugit quaerat sequi.
                </Text>
              </Stack>
            }
          />
          <Stepper.Step
            icon={<DescriptionIcon size={28} />}
            label={
              <Stack className="w-3/4 mx-auto">
                <Text className=" bg-white text-center text-lg font-poppins min-h-[50px]">
                  Get a Detailed Information About Your Personality
                </Text>

                <Text className="text-start tracking-4 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta adipisci aperiam quasi rem libero minus itaque
                  similique, fugit quaerat sequi.
                </Text>
              </Stack>
            }
          />
          <Stepper.Step
            icon={<InsightIcon size={28} />}
            label={
              <Stack className="w-3/4 mx-auto">
                <Text className=" bg-white text-center text-lg font-poppins min-h-[50px]">
                  Gain Deep Insights About Your Personality
                </Text>

                <Text className="text-start tracking-4 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta adipisci aperiam quasi rem libero minus itaque
                  similique, fugit quaerat sequi.
                </Text>
              </Stack>
            }
          />
        </Stepper>
      </Stack>
    </Stack>
  );
};
export default PersonalityTestJumbotron;
