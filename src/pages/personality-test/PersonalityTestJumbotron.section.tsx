import {
  Grid,
  Stack,
  Text,
  Image,
  Group,
  useMantineTheme,
  Button
} from "@mantine/core";
import React from "react";
import {
  AnxietyPersonIcon,
  QuizIcon,
  SearchIconBold
} from "../../assets/icons/Fluent";
import uinLogo from "../../assets/images/uin-logo.png";

export interface IPersonalityTestJumbotron {
  scrollIntoView: any;
}

const PersonalityTestJumbotron: React.FC<IPersonalityTestJumbotron> = ({
  scrollIntoView
}) => {
  const theme = useMantineTheme();
  return (
    <Stack className="">
      <div className="w-[72px] ml-10 mt-4 hidden md:block">
        <Image src={uinLogo} className="" />
      </div>
      <Stack className="w-[80%] self-center mt-36 md:mt-16 ">
        <Grid className=" ">
          <Grid.Col sm={12} md={7} className="flex pr-10 relative">
            {/* <SearchIconBold
              size={100}
              color={theme.colors["secondary"][4]}
              className="absolute top-0"
            /> */}
            <Stack className="w-fit align-middle h-fit self-center gap-8">
              <Text className="font-poppins-semibold text-[38px] md:text-[46px] lg:text-[54px] text-pastel-primary-text z-10">
                {/* Tes Kecemasan */}
                Petunjuk Pengisian
              </Text>
              <Text className="text-[18px] md:text-xl text-primary-text-500 tracking-4 text-justify">
                {/* Anda akan diarahkan untuk menjawab total 45 pertanyaan yang
                masing-masing memiliki 4 pilihan jawaban.
                <br />
                <br />
                Pilih jawaban yang paling sesuai dengan perasaan dan pengalaman
                pribadi Anda karena pilihan jawaban Anda akan memberikan
                kontribusi terhadap hasil akhir */}
                Bacalah secara menyeluruh pertanyaan yang ada dalam kolom
                pertanyaan dengan teliti. Pada kolom skala terdapat 4 skala
                yaitu: sangat setuju, setuju, kurang setuju, dan tidak setuju.
                Pilihlah salah satu skala tersebut yang sesuai dengan keadaan
                diri anda dengan cara menekan pada satu skala .
              </Text>

              <Button
                className="bg-primaryDarkBlue hover:bg-primaryDarkBlue rounded-full w-fit px-10 pb-1 !h-12 text-xl font-normal mt-4"
                onClick={() => {
                  scrollIntoView({
                    alignment: "center"
                  });
                }}
              >
                Mulai Tes Kecemasan
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col md={5} className="">
            <Stack className="pt-4 md:pt-4 lg:pt-0 hidden lg:flex">
              <div className="relative self-center">
                <div className="p-4 rounded-lg bg-secondary-500 overflow-hidden max-w-[440px]">
                  <AnxietyPersonIcon size={320} className="self-center" />
                </div>
                <div className="h-full w-full bg-primaryGreen -z-10 top-4 left-4 rounded-lg absolute max-w-[440px]"></div>
              </div>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Stack>
  );
};
export default PersonalityTestJumbotron;
