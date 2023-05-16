import { Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { PersonalitySearchIcon, QuotesIconOutline } from '../assets/icons/Fluent';
import personaLogo from "../assets/images/persona-logos.png";
import VerticalDivider from './VerticalDivider.component';

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
  return (
    <Group className="justify-center w-[80%] self-center gap-10 md:gap-10 flex-nowrap">
        <div className="self-center w-[200px] md:w-[320px] overflow-hidden bg-white">
          {/* <img
            src={personaLogo}
            className="w-fit rounded-full"
            alt="Foto Ketua Lurah"
          /> */}
          <PersonalitySearchIcon size={400} />
        </div>
      <Stack className="relative">
        <QuotesIconOutline
          size={96}
          color={"#deddf1"}
          className="absolute -z-10 right-0 -bottom-6 md:top-0"
        />
        <Stack className="gap-2 md:gap-0">
          <Text className="font-poppins-bold text-[18px] md:text-[30px] text-primary-text-500">
            {primaryTitle}
          </Text>
          <Text className="font-poppins-bold text-[22px] md:text-[54px] text-secondary-text-500 -mt-2">
            {secondaryTitle}
          </Text>
        </Stack>
        <div className='-mt-4'>

        <VerticalDivider  />
        </div>
        <Stack className="gap-0">
          <Text
            className={`md:w-[600px] text-primary-text-500 tracking-1 text-justify text-[18px]`}
          >
            {paragraph}
            {/* Assalamualaikum Warahmatullahi Wabarakatuh. Puji syukur kepada Allah
            Subhana wa Taala atas nikmat yang dianugerahkan, Salawat serta salam
            kepada junjungan nabi besar Muhammad Sallahu Alai wa Sallam. Salam
            sejahterah untuk kita semua
            <br />
            <br />
            Dewasa ini, perkembangan teknologi, komunikasi dan informasi membawa
            kemajuan yang sangat pesat di berbagai bidang kehidupan. 
            Mudah-mudahan dengan adanya website ini Kelurahan Banyorang dapat
            berkembang jauh lebih baik. */}
          </Text>
        </Stack>
      </Stack>
    </Group>
  )
}
export default ParagraphWithImage;