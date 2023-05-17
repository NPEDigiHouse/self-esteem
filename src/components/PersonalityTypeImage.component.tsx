import { Stack, Image } from "@mantine/core";
import React from "react";

export interface IPersonalityTypeImage {
  imgSrc: string;
  h?: string;
  w?: string;
}

const PersonalityTypeImage: React.FC<IPersonalityTypeImage> = ({
  imgSrc,
  h="h-full",
  w="w-full"
}) => (
  <Stack className={`rounded-full border-[4px] border-white ${h} ${w} overflow-hidden bg-error-50 p-2`}>
    <Image src={imgSrc} className="" />
  </Stack>
);
export default PersonalityTypeImage;
