import { Stack, Text } from "@mantine/core";
import React from "react";

export interface IPersonalityTestJumbotron {
  scrollIntoView?: any;
}

const PersonalityTestJumbotron: React.FC<IPersonalityTestJumbotron> = ({}) => {
  return (
    <Stack className="self-center mb-10 sm:mb-20 w-full gap-0 pb-2">
      <Stack className="self-center bg-test bg-cover bg-center relative w-fit">
        <Stack className="gap-4 sm:gap-6 w-[95%] sm:w-[70%] px-10 self-center z-10 my-8 sm:my-16 pb-4 sm:pb-12 pt-4 sm:pt-10 bg-white/[0.9] ">
          <Stack className="gap-0 items-center z-10">
            <Text className="font-roboto text-[28px] sm:text-[50px] text-primary-text-500 z-10 text-center rounded-xl">
              Tes Keberhargaan Diri
            </Text>
          </Stack>
          <Text className="text-lg sm:text-[18px] self-center mx-2 sm:mx-8 tracking-4 text-primary-text-500 z-10 rounded-b-xl">
            Anda akan diarahkan untuk menjawab total 42 pertanyaan yang
            masing-masing memiliki 4 pilihan jawaban.
            <br />
            <br />
            Pilih jawaban yang paling sesuai dengan perasaan dan pengalaman
            pribadi Anda karena pilihan jawaban Anda akan memberikan kontribusi
            terhadap hasil akhir
          </Text>
        </Stack>
        {/* <div className="bg-pastel-blue-black w-[450px] h-[450px] rounded-3xl mt-8 absolute -z-40 top-14 right-[72px]"></div> */}
      </Stack>
    </Stack>
  );
};
export default PersonalityTestJumbotron;
