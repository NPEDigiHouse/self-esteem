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
      <div className="w-[72px] ml-10 mt-4">
        <Image src={uinLogo} className="" />
      </div>
      <Stack className="mt-16 w-[80%] self-center">
        <Grid className=" ">
          <Grid.Col span={7} className="flex pr-10 relative">
            {/* <SearchIconBold
              size={100}
              color={theme.colors["secondary"][4]}
              className="absolute top-0"
            /> */}
            <Stack className="w-fit align-middle h-fit self-center gap-8">
              <Text className="font-poppins-semibold text-[54px] text-pastel-primary-text z-10">
                {/* Tes Kecemasan */}
                Petunjuk Pengisian
              </Text>
              <Text className="text-xl text-primary-text-500 tracking-4 text-justify">
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
          <Grid.Col span={5} className="">
            <div className="relative">
              <div className="p-4 rounded-lg bg-secondary-500">
                <AnxietyPersonIcon size={380} />
              </div>
              <div className="h-full w-full bg-primaryGreen -z-10 top-4 left-4 rounded-lg absolute"></div>
            </div>
          </Grid.Col>
        </Grid>
      </Stack>
    </Stack>
  );
};
export default PersonalityTestJumbotron;
