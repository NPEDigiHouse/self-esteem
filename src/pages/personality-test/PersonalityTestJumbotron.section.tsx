import { Grid, Group, Stack, Stepper, Text } from "@mantine/core";
import React from "react";
import {
  DescriptionIcon,
  InsightIcon,
  PersonalitySearchGradientIcon,
  PersonalitySearchIcon,
  SearchIcon
} from "../../assets/icons/Fluent";

export interface IPersonalityTestJumbotron {}

const PersonalityTestJumbotron: React.FC<IPersonalityTestJumbotron> = ({}) => {
  return (
    <Stack className="mt-28 w-[80%] self-center">
      <Grid className=" ">
        <Grid.Col span={8} className="flex pr-10">
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
        <Grid.Col span={4}>
          <PersonalitySearchGradientIcon size={400} />
        </Grid.Col>
      </Grid>
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
