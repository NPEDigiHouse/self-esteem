import { Stack, Image } from "@mantine/core";
import React from "react";
import PersonalityTypeImage from "./PersonalityTypeImage.component";

export interface IStackedPersonalityTypeImage {
  imgSrcList: Array<string>;
}

const StackedPersonalityTypeImage: React.FC<IStackedPersonalityTypeImage> = ({
  imgSrcList = []
}) => (
  <Stack className="gap-0">
    {imgSrcList.map((imgSrc: string, idx: number) => {
      return (
        <div className={`${idx==0? "mt-0" : "-mt-20"} self-center ${idx%2==0? "mr-32 z-10" : "ml-32 z-20"} bg-transparent`}>
          <PersonalityTypeImage key={idx} imgSrc={imgSrc} h="h-48" w="w-48" />
        </div>
      );
    })}
  </Stack>
);
export default StackedPersonalityTypeImage;
