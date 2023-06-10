import {
  Button,
  Grid,
  Image,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React from "react";
import { AnxietyPersonIcon, SearchIconBold } from "../../assets/icons/Fluent";
import uinLogo from "../../assets/images/uin-logo.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";

export interface IPersonalityTestJumbotron {
  scrollIntoView: any;
}

const PersonalityTestJumbotron: React.FC<IPersonalityTestJumbotron> = ({
  scrollIntoView
}) => {
  const theme = useMantineTheme();
  return (
    <Stack className="self-center pb-10 mb-20 w-full gap-0">
      <Stack className="self-center bg-test bg-cover bg-center relative w-fit border-b-4 border-sc-cp-900">
        <Stack className="gap-6 w-[70%] px-10 self-center z-10 my-16 py-10 bg-white/[0.9] ">
          <Stack className="gap-0 items-center z-10">
            <Text className="font-roboto text-[54px] text-primary-text-500 z-10 text-center rounded-xl">
              Tes Self-Esteem
            </Text>
          </Stack>
          <Text className="text-[18px] self-center mx-8 tracking-4 text-primary-text-500 z-10 rounded-b-xl">
            Anda akan diarahkan untuk menjawab total 45 pertanyaan yang
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
