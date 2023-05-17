import { Button, Grid, Group, Image, Stack, Text } from "@mantine/core";
import React from "react";
import doctor from "../../assets/images/doctor.png";
import advertising from "../../assets/images/advertising.png";
import marketing from "../../assets/images/marketing.png";
import readingBook from "../../assets/images/reading-book.png";
import stayHome from "../../assets/images/stay-home.png";
import studying from "../../assets/images/studying.png";
import personaLogo from "../../assets/images/persona-logos.png";

import {
  ArrowRightAltIcon,
  PersonalitySearchIcon
} from "../../assets/icons/Fluent";
import PersonalityProfile from "../../components/PersonalityProfile.component";

export interface IJumbotron {}

const Jumbotron: React.FC<IJumbotron> = ({}) => {
  return (
    <Stack className="gap-0 mb-40">
      <div className="mt-2 w-[72px] ml-14">
        <Image src={personaLogo} className="" />
      </div>
      <Stack className="mt-12 self-center bg-white">
        <Stack className="gap-10 w-[60%] self-center">
          <Stack className="gap-0 items-center">
            <Text className="font-poppins-semibold text-[54px] text-pastel-primary-text z-10">
              Discover Yourself
            </Text>
          </Stack>
          <Text className="text-[18px] self-center mx-8 text-center tracking-4 text-primary-text-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odio laboriosam nobis aperiam consectetur quam architecto consequuntur suscipit. Sequi culpa quia magnam blanditiis pariatur ducimus ratione fugit nihil earum explicabo.
          </Text>
          <Button
            className="bg-pastel-blue-black rounded-full px-10 w-fit !h-12 text-[18px] self-center"
            rightIcon={<ArrowRightAltIcon size={28} className="mt-1" />}
          >
            Start Personality Test
          </Button>
        </Stack>
      </Stack>
      <Group className="self-center gap-16 bg-error-50 items-start mt-6">
        <PersonalityProfile imgSrc={doctor} personalityType="Clever" />
        <PersonalityProfile
          imgSrc={studying}
          personalityType="Clever"
          mtType={1}
        />
        <PersonalityProfile
          imgSrc={stayHome}
          personalityType="Clever"
          mtType={1}
        />
        <PersonalityProfile
          imgSrc={readingBook}
          personalityType="Clever"
          mtType={1}
        />
        <PersonalityProfile
          imgSrc={marketing}
          personalityType="Clever"
          mtType={1}
        />
        <PersonalityProfile imgSrc={advertising} personalityType="Clever" />
      </Group>
      {/* <div className="bg-pastel-blue-black w-[450px] h-[450px] rounded-3xl mt-8 absolute -z-40 top-14 right-[72px]"></div> */}
    </Stack>
  );
};
export default Jumbotron;
