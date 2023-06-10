import { Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import {
  DescriptionIcon,
  MirrorSelfEsteemIcon
} from "../assets/icons/Fluent";
import bg3 from "../assets/images/bg3.jpg";

export interface IParagraphWithImage {
  secondaryTitle: string;
  paragraph: string;
  paragraph2: string;
}

const ParagraphWithImage: React.FC<IParagraphWithImage> = ({
  secondaryTitle,
  paragraph,
  paragraph2
}) => {
  const theme= useMantineTheme();
  return (
    <Group className="justify-center w-[70%] self-center gap-10 md:gap-10 flex-nowrap">
      <Stack className="relative ">
        <Group className="gap-2 md:gap-4 w-fit self-center">
          <DescriptionIcon size={52} color={theme.colors['primary-text'][5]} />
          <Text className="font-roboto-bold text-[22px] md:text-[50px] text-primary-text-500 text-center">
            {secondaryTitle}
          </Text>
        </Group>
        <Stack className="gap-0 mt-4">
          <Text
            className={`text-primary-text-500 tracking-1 text-justify text-[18px] leading-8`}
          >
            {paragraph}
            <br/>
            <br/>
            {paragraph2}
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
