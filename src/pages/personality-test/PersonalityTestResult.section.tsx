import {
  Button,
  Grid,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useContext } from "react";
import {
  DownloadIcon,
  RestartIcon,
  SelfLoveHigh,
  SelfLoveLow,
  SelfLoveNormal
} from "../../assets/icons/Fluent";
import { AppContext } from "../../context/app-context.context";
import AnxietyTestResult from "../../letters/AnxietyTestResult.letter";

export interface IPersonalityTestResult {
  scene: "pertanyaan" | "hasil";
  setScene: React.Dispatch<React.SetStateAction<"pertanyaan" | "hasil">>;
  scrollTo?: any;
  scrollIntoView: any;
}

const PersonalityTestResult: React.FC<IPersonalityTestResult> = ({
  setScene,
  scrollIntoView
}) => {
  const {
    result,
    resultPercentage,
    setResult,
    setResultPercentage,
    currentTesterName,
    currentTesterSchool,
    currentTesterClass,
    currentTesterGender,
    currentTesterBirthDate
  } = useContext(AppContext);

  const theme = useMantineTheme();

  return (
    <Stack className="mt-14">
      <Stack className="gap-0 self-center w-[50%]">
        <Text className="self-start font-roboto-semibold text-[30px] md:text-xl text-secondary-text-500">
          Responded yang bernama {currentTesterName} dari kelas{" "}
          {currentTesterClass}
        </Text>
        <Text className="self-start font-roboto-semibold text-[30px] md:text-[38px] text-primary-text-500">
          Memiliki Tingkat Self-Esteem
          <span
            className={`w-[90%] font-roboto-bold  ${
              result === "Tinggi"
                ? "text-primaryGreen"
                : result === "Sedang"
                ? "text-sc-cp-50"
                : "text-sc-cp-50"
            }`}
          >
            {" "}
            {result}
          </span>
        </Text>
      </Stack>
      <Stack className="justify-center w-[90%] self-center gap-10 md:gap-10 mt-0 md:mt-10">
        <div className="flex self-center w-[200px] md:w-[320px] overflow-hidden">
          {result === "Rendah" ? (
            <SelfLoveLow size={300} />
          ) : result === "Sedang" ? (
            <SelfLoveNormal size={300} className="self-center" />
          ) : (
            <SelfLoveHigh size={300} className="self-center" />
          )}
        </div>
        <Stack className="relative self-center">
          <Stack className="gap-2 md:gap-0 self-center">
            <Text className="text-[18px] md:text-[18px] text-secondary-text-500 -mt-4">
              Presentase Self-Esteem {resultPercentage?.toFixed(1)} % (Semakin
              tinggi semakin baik)
            </Text>
          </Stack>
          <Stack className="gap-0 mt-4">
            <Text
              className={`w-[80%] self-center text-primary-text-500 tracking-1 text-justify text-[18px]`}
            >
              {result === "Rendah" ? (
                <>
                  Orang dengan tingkat self-esteem rendah mungkin merasa tidak
                  berharga, meragukan kemampuan dan nilai diri mereka, serta
                  cenderung meremehkan pencapaian pribadi mereka. Mereka mungkin
                  mengalami kesulitan dalam menghadapi tantangan dan mengambil
                  risiko, dan seringkali lebih rentan terhadap pengaruh negatif
                  dari orang lain.
                  <br />
                  <br />
                  Meningkatkan self-esteem rendah melibatkan pekerjaan dalam
                  mengembangkan penghargaan diri, mengidentifikasi kelebihan,
                  dan memperbaiki pola pikir yang negatif.
                </>
              ) : result === "Sedang" ? (
                <>
                  Orang dengan tingkat self-esteem sedang memiliki kepercayaan
                  diri yang cukup untuk menghadapi tantangan dan mengambil
                  risiko yang wajar. Mereka mengakui kelebihan dan kekurangan
                  mereka dengan sikap realistis, dan mampu menghargai dan
                  menghormati diri sendiri.
                  <br />
                  <br />
                  Mereka memiliki keyakinan dalam kemampuan mereka, tetapi juga
                  terbuka untuk belajar dan tumbuh. Tingkat self-esteem sedang
                  adalah target yang baik untuk diupayakan dan dipertahankan,
                  karena menciptakan landasan yang kokoh untuk kesejahteraan dan
                  kesuksesan pribadi.
                </>
              ) : (
                <>
                  Orang dengan tingkat self-esteem tinggi memiliki pandangan
                  positif tentang diri sendiri dan menghargai diri mereka dengan
                  penuh kasih sayang.
                  <br />
                  <br />
                  Mereka merasa puas dengan diri sendiri, menerima kelebihan dan
                  kekurangan mereka, dan berani mengambil langkah-langkah yang
                  diperlukan untuk mencapai tujuan mereka. Tingkat self-esteem
                  tinggi memungkinkan seseorang untuk mengatasi rintangan dengan
                  percaya diri, mengembangkan hubungan sosial yang sehat, dan
                  mengambil risiko yang produktif dalam kehidupan.
                </>
              )}
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Grid className="mt-16 self-center w-[80%]">
        <Grid.Col sm={12} md={6}>
          <Button
            className="bg-sc-cp-500 hover:bg-sc-cp-500 rounded-sm !h-14 text-xl font-normal !w-full text-primary-text-500"
            leftIcon={
              <RestartIcon
                size={26}
                className="mt-[2px]"
                color={theme.colors["primary-text"][5]}
              />
            }
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
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <PDFDownloadLink
            document={
              <AnxietyTestResult
                name={currentTesterName || ""}
                school={currentTesterSchool || ""}
                classes={currentTesterClass || ""}
                gender={currentTesterGender || ""}
                percentage={resultPercentage}
                result={result}
                birthDate={currentTesterBirthDate as Date}
              />
            }
            fileName="hasil-tes-kecemasan.pdf"
          >
            <Button
              className="bg-sc-cp-900 hover:bg-sc-cp-900 rounded-sm !h-14 text-xl font-normal !w-full"
              leftIcon={
                <DownloadIcon
                  size={26}
                  className="mt-[2px]"
                  color={"#FFFFFF"}
                />
              }
            >
              Download Dokumen Hasil
            </Button>
          </PDFDownloadLink>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default PersonalityTestResult;
