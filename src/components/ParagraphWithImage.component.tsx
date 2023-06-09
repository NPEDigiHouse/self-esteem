import { Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import {
  DescriptionIcon,
  MirrorSelfEsteemIcon
} from "../assets/icons/Fluent";
import bg3 from "../assets/images/bg3.jpg";

export interface IParagraphWithImage {
  primaryTitle: string;
  secondaryTitle: string;
  paragraph: string;
}

const ParagraphWithImage: React.FC<IParagraphWithImage> = ({
  primaryTitle,
  secondaryTitle,
  paragraph
}) => {
  const theme= useMantineTheme();
  return (
    <Group className="justify-center w-[80%] self-center gap-10 md:gap-10 flex-nowrap">
      <Stack className="relative ">
        <Group className="gap-2 md:gap-4 w-fit">
          <DescriptionIcon size={52} color={theme.colors['primary-text'][5]} />
          <Text className="font-roboto-bold text-[22px] md:text-[50px] text-primary-text-500 ">
            {secondaryTitle}
          </Text>
        </Group>
        <Stack className="gap-0 mt-2">
          <Text
            className={`md:w-[700px] text-primary-text-500 tracking-1 text-justify text-[18px]`}
          >
            {paragraph}
          </Text>
        </Stack>
      </Stack>

      {/* <div className="w-[200px] md:w-[320px] overflow-hidden bg-white self-center">
        <Image src={bg3} />
      </div> */}
        {/* <MirrorSelfEsteemIcon size={260} /> */}
    </Group>
  );
};
export default ParagraphWithImage;
