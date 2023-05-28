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
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";

export interface IJumbotron {}

const Jumbotron: React.FC<IJumbotron> = ({}) => {
  return (
    <Stack className="gap-0 mb-40">
      <div className="mt-7 w-[120px] ml-10">
        <Image src={personaLogo} className="" />
      </div>
      <Stack className="mt-16 self-center bg-white">
        <Stack className="gap-10 w-[60%] self-center">
          <Stack className="gap-0 items-center">
            <Text className="font-poppins-semibold text-[40px] text-pastel-primary-text z-10 text-center">
            “Taklukkan Kecemasan, Temukan Keseimbangan Hidupmu.”
            </Text>
          </Stack>
          <Text className="text-[18px] self-center mx-8 text-center tracking-4 text-primary-text-500">
          Selamat datang di website Tes Kecemasan! Website ini dirancang khusus untuk membantu Anda mengidentifikasi tingkat kecemasan Anda. Kami menyediakan 45 pertanyaan yang dirancang secara cermat untuk memahami perasaan dan pikiran Anda terkait kecemasan.
          </Text>
          <Button
            className="bg-pastel-blue-black rounded-full px-10 w-fit !h-12 text-[18px] self-center font-normal"
            rightIcon={<ArrowRightAltIcon size={28} className="mt-1" />}
            component={Link}
            to={ROUTES.personalityTest}
          >
            Mulai Tes Kecemasan
          </Button>
        </Stack>
      </Stack>
      <Group className="self-center gap-16 bg-error-50 items-start mt-8">
        <PersonalityProfile
          imgSrc={doctor}
          personalityType="Clever"
          // mtType={1}
          mtType={1}
        />
        <PersonalityProfile
          imgSrc={studying}
          personalityType="Clever"
          // mtType={2}
          mtType={1}
        />
        <PersonalityProfile
          imgSrc={stayHome}
          personalityType="Clever"
          // mtType={3}
          mtType={1}
        />
        <PersonalityProfile
          imgSrc={readingBook}
          personalityType="Clever"
          // mtType={3}
          mtType={1}
        />
        <PersonalityProfile
          imgSrc={marketing}
          personalityType="Clever"
          // mtType={2}
          mtType={1}
        />
        <PersonalityProfile
          imgSrc={advertising}
          personalityType="Clever"
          // mtType={1}
          mtType={1}
        />
      </Group>
      {/* <div className="bg-pastel-blue-black w-[450px] h-[450px] rounded-3xl mt-8 absolute -z-40 top-14 right-[72px]"></div> */}
    </Stack>
  );
};
export default Jumbotron;
