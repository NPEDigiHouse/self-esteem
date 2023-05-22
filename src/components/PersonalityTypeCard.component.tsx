import { Stack, Text, Image } from "@mantine/core";
import studying from "../assets/images/studying.png";
import React from "react";

export interface IPersonalityTypeCard {
  imgSrc?: string;
  title?: string;
  description?: string;
}

const PersonalityTypeCard: React.FC<IPersonalityTypeCard> = ({
  imgSrc=studying,
  title="Clever",
  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, enim aut quaerat obcaecati assumenda corporis magnam reprehenderit quibusdam vitae nemo!"
}) => (
  <Stack className="bg-white rounded-xl p-2">
    <div className="bg-error-50 rounded-xl overflow-hidden">
      <Image src={imgSrc} className="transform scale-[1.2]" />
    </div>
    <Text className="font-poppins-semibold text-primary-text-500">{title}</Text>
    <Stack className="gap-0">
      <Text className="text-primary-text-500 line-clamp-3 ">
        {description}
      </Text>
      <Text className="text-[#2222FF] cursor-pointer w-fit">See more</Text>
    </Stack>
  </Stack>
);
export default PersonalityTypeCard;
