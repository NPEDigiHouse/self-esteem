import { Image, Stack, Text } from "@mantine/core";
import React from "react";
import personality from "../assets/images/doctor.png";

export interface IPersonalityProfile {
  imgSrc: string;
  personalityType: string;
  mtType?: 1 | 2 | 3;
}

const PersonalityProfile: React.FC<IPersonalityProfile> = ({
  imgSrc = personality,
  personalityType = "",
  mtType= 1
}) => {
  return (
    <Stack className={`gap-1 ${mtType==1? "pt-0" : mtType==2? "pt-10" : "pt-14"}`}>
      <Stack className="rounded-full border-[4px] border-pastel-yellow-50 h-32 w-32 overflow-hidden bg-white p-2">
        <Image src={imgSrc} className="" />
      </Stack>
      <Text className="self-center font-roboto-semibold tracking-4">
        {personalityType}
      </Text>
    </Stack>
  );
};
export default PersonalityProfile;
