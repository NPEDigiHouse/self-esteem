import { Button, Group, Stack, Text } from "@mantine/core";
import React, { useContext } from "react";
import {
  FileCheckIcon,
  NormalAnxietyIcon,
  NotAnxietyIcon,
  ResultAnxietyIcon,
  ScaredPersonIcon
} from "../../assets/icons/Fluent";
import VerticalDivider from "../../components/VerticalDivider.component";
import { AppContext } from "../../context/app-context.context";

export interface IPersonalityTestResult {
  scene: "pertanyaan" | "hasil";
  setScene: React.Dispatch<React.SetStateAction<"pertanyaan" | "hasil">>;
  scrollTo: any;
  scrollIntoView: any;
}

const PersonalityTestResult: React.FC<IPersonalityTestResult> = ({
  scene,
  setScene,
  scrollTo,
  scrollIntoView
}) => {
  const { result, resultPercentage, setResult, setResultPercentage } =
    useContext(AppContext);
  return (
    <Stack className="mt-28">
      <Stack className="gap-0">
        <Text className="w-[90%] text-center self-center font-poppins-semibold text-[44px] text-primary-text-500">
          Hasil Tes: Anda Mempunyai Kecemasan
        </Text>
        <Text
          className={`w-[90%] text-center self-center font-poppins-bold text-[44px] ${
            result === "Rendah"
              ? "text-primaryGreen"
              : result === "Sedang"
              ? "text-primaryBlue"
              : "text-primaryDarkBlue"
          }`}
        >
          Tingkat {result}
        </Text>
      </Stack>
      <Group className="justify-center w-[90%] self-center gap-10 md:gap-10 mt-10">
        <div className="flex self-center w-[200px] md:w-[320px] overflow-hidden">
          {result === "Rendah" ? (
            <NotAnxietyIcon size={300} />
          ) : result === "Sedang" ? (
            <NormalAnxietyIcon size={300} className="self-center ml-2" />
          ) : (
            <ResultAnxietyIcon size={300} className="self-center ml-2" />
          )}
        </div>
        <Stack className="relative">
          <FileCheckIcon
            size={96}
            color={"#deddf1"}
            className="absolute -z-10 right-0 -bottom-6 md:-top-4"
          />
          <Stack className="gap-2 md:gap-0">
            <Text className="font-poppins-bold text-[18px] md:text-[30px] text-primary-text-500">
              Tingkat Kecemasan {result}
            </Text>
            <Text className="text-[22px] md:text-[20px] text-secondary-text-500 -mt-1">
              Dengan Presentase Kecemasan {resultPercentage} %
            </Text>
          </Stack>
          <div className="">
            <VerticalDivider h="sm" />
          </div>
          <Stack className="gap-0">
            <Text
              className={`md:w-[700px] text-primary-text-500 tracking-1 text-justify text-[18px]`}
            >
              {result === "Rendah" ? (
                <>
                  Orang dengan tingkat kecemasan Rendah cenderung mempunyai
                  sikap untuk mulai mengerjakan tugas segera setelah permberian
                  tugas
                </>
              ) : result === "Sedang" ? (
                <>
                  Orang dengan tingkat kecemasan Sedang cenderung mempunyai
                  sikap untuk mulai mengerjakan tugas saat beberapa hari sebelum
                  hari pengumpulan.
                </>
              ) : (
                <>
                  Orang dengan tingkat kecemasan Tinggi cenderung mempunyai
                  sikap untuk mulai mengerjakan tugas saat sudah mendekati waktu
                  pengumpulan.
                </>
              )}
            </Text>
          </Stack>
        </Stack>
      </Group>

      <Button
        className="bg-primaryDarkBlue hover:bg-primaryDarkBlue rounded-full w-[80%] !h-14 text-xl self-center font-normal mt-28"
        onClick={() => {
          setScene("pertanyaan");
          // scrollTo({ y: 600 });

          scrollIntoView({
            alignment: "center"
          });

          setResult(null);
          setResultPercentage(null);
        }}
      >
        Ulang Tes
      </Button>
    </Stack>
  );
};
export default PersonalityTestResult;
