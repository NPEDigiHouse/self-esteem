import { Button, Grid, Group, Image, Stack, Text } from "@mantine/core";
import React from "react";
import personality from "../../assets/images/persona-logos.png";
import { ArrowRightAltIcon, FaceInsideFaceIcon } from "../../assets/icons/Fluent";

export interface IJumbotron {}

const Jumbotron: React.FC<IJumbotron> = ({}) => {
  return (
    <div className="">
      {/* <Group className="gap-20 mx-4 flex-nowrap pt-16"> */}
      <Grid className="mt-28">
        <Grid.Col span={7} className="">
          <Stack className="gap-10 w-fit mx-auto">
            <Stack className="gap-0 items-center">
              <Text className="font-poppins-bold text-[64px] text-pastel-primary-text z-10">
                Personality Test
              </Text>
              <Text className="text-secondary-text-500 font-semibold text-2xl -mt-4">
                Know Yourself better
              </Text>
            </Stack>
            <Text className="bg-error-50 text-xl self-center mx-8 text-center tracking-4 font-semibold text-primary-text-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              voluptates eos qui eius quo minima id dicta eum laborum suscipit!
            </Text>
            <Button className="bg-pastel-blue-black rounded-full px-4" rightIcon={<ArrowRightAltIcon />}>
              Start Personality Test
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={5} className="">
          <Stack className="w-96">
            <Image src={personality} className="" />
          </Stack>
        </Grid.Col>
      </Grid>

      {/* <div className="bg-pastel-blue-black w-[450px] h-[450px] rounded-3xl mt-8 absolute -z-40 top-14 right-[72px]"></div> */}
    </div>
  );
};
export default Jumbotron;
