import { Button, Grid, Stack, Text, useMantineTheme } from "@mantine/core";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useContext, useState } from "react";
import {
  DownloadIcon,
  RestartIcon,
  SelfLoveHigh,
  SelfLoveLow,
  SelfLoveNormal
} from "../../assets/icons/Fluent";
import SelfEsteemAspectResult from "../../components/SelfEsteemAspectResult.component";
import { AppContext } from "../../context/app-context.context";
import AnxietyTestResult from "../../letters/AnxietyTestResult.letter";
import { calculateClass, calculateResult } from "./PersonalityTest.page";

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
    currentTesterGender,
    currentTesterBirthDate,
    kebajikanScore,
    keberartianScore,
    kekuatanScore,
    kemampuanDiriScore,
    setkebajikanScore,
    setkeberartianScore,
    setkekuatanScore,
    setkemampuanDiriScore
  } = useContext(AppContext);

  const [kekuatanScorePercentage] = useState(
    calculateResult(kekuatanScore || 0, 7)
  );
  const [keberartianScorePercentage] = useState(
    calculateResult(keberartianScore || 0, 12)
  );
  const [kebajikanScorePercentage] = useState(
    calculateResult(kebajikanScore || 0, 11)
  );
  const [kemampuanDiriScorePercentage] = useState(
    calculateResult(kemampuanDiriScore || 0, 12)
  );

  const [kekuatanScoreClass] = useState(
    calculateClass(kekuatanScorePercentage)
  );
  const [keberartianScoreClass] = useState(
    calculateClass(keberartianScorePercentage)
  );
  const [kebajikanScoreClass] = useState(
    calculateClass(kebajikanScorePercentage)
  );
  const [kemampuanDiriScoreClass] = useState(
    calculateClass(kemampuanDiriScorePercentage)
  );

  const theme = useMantineTheme();

  return (
    <Stack className="mt-8 sm:mt-14">
      <Stack className="gap-0 self-center w-[90%] sm:w-[50%]">
        <Text className="self-start font-roboto text-lg md:text-xl text-secondary-text-500">
          Responden yang bernama {currentTesterName} dari instansi{" "}
          {currentTesterSchool}
        </Text>
        <Text className="self-start font-roboto-semibold text-[24px] md:text-[38px] text-primary-text-500">
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
            <Text className="text-lg md:text-[18px] text-secondary-text-500 -mt-4 sm:text-start text-center">
              Presentase Self-Esteem {resultPercentage?.toFixed(1)} % (Semakin
              tinggi semakin baik)
            </Text>
          </Stack>
          <Stack className="gap-0 mt-4">
            <Text
              className={`w-[95%] sm:w-[80%] self-center text-primary-text-500 tracking-1 text-justify text-lg sm:text-[18px]`}
            >
              {result === "Rendah" ? (
                <>
                  Anda memiliki tingkat self esteem rendah. Dalam hal ini Anda
                  digambarkan sebagai orang yang tidak percaya pada dunia,
                  disamping tidak adanya kepercayaan dan penghargaan pada diri
                  Anda.
                </>
              ) : result === "Sedang" ? (
                <>
                  Anda memiliki tingkat self esteem sedang. Dalam hal ini Anda
                  digambarkan sebagai seseorang yang memiliki kepercayaan diri
                  yang rendah. Hal ini ditandai dengan adanya ketergantungan
                  pada pendapat orang lain dalam melakukan evaluasi pada diri
                  Anda.
                </>
              ) : (
                <>
                  Dengan skor self-esteem anda yang tinggi. Dalam hal ini Anda
                  digambarkan sebagai seseorang yang mampu menghadapi tugas dan
                  orang lain dengan penuh pengharapan akan sukses dan diterima.
                  Anda juga memiliki pandangan yang lebih realistis dan positif
                  terhadap lingkungan sekitar dan juga terhadap diri sendiri
                </>
              )}
            </Text>
          </Stack>
          <SelfEsteemAspectResult
            type={"Kekuatan"}
            result={kekuatanScoreClass}
            percentage={kekuatanScorePercentage}
            resultHigh={
              "Individu memiliki kemampuan yang baik dalam mempengaruhi orang lain dan mendapatkan rasa hormat dari orang lain"
            }
            resultMedium={
              "Individu cukup mampu mempengaruhi orang lain dan mendapatkan rasa hormat dari orang lain"
            }
            resultLow={
              "Individu kurang mampu mempengaruhi orang lain dan kurang mendapatkan rasa hormat dari orang lain"
            }
          />
          <SelfEsteemAspectResult
            type="Keberartian"
            result={keberartianScoreClass}
            percentage={keberartianScorePercentage}
            resultHigh={
              "Individu mampu menerima diri sendiri dan mendapatkan penerimaan dari orang lain"
            }
            resultMedium={
              "Individu cukup baik dalam menerima diri sendiri dan mendapatkan penerimaan dari orang lain"
            }
            resultLow={
              "Individu kurang dapat menerima diri sendiri dan kurang mendapatkan penerimaan dari orang lain"
            }
          />
          <SelfEsteemAspectResult
            type="Kebajikan"
            result={kebajikanScoreClass}
            percentage={kebajikanScorePercentage}
            resultHigh={
              "Individu memiliki kemampuan yang baik dalam ketaatan pada terhadap norma dan standar moral yang berlaku di lingkungan masyarakat"
            }
            resultMedium={
              "Individu cukup taat terhadap norma dan standar moral yang berlaku di lingkungan masyarakat"
            }
            resultLow={
              "Individu kurang mampu taat terhadap norma dan standar moral yang berlaku di lingkungan masyarakat"
            }
          />
          <SelfEsteemAspectResult
            type="Kemampuan Diri"
            result={kemampuanDiriScoreClass}
            percentage={kemampuanDiriScorePercentage}
            resultHigh={
              "Individu memiliki kemampuan untuk berprestasi, mengambil keputusan, dan menyelesaikan masalah"
            }
            resultMedium={
              "Individu mampu untuk mencapai tujuan yang ditetapkan"
            }
            resultLow={
              "Individu kurang mampu untuk mengambil keputusan dan mencapai tujuan yang ditetapkan"
            }
          />
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
              setkebajikanScore(null);
              setkeberartianScore(null);
              setkemampuanDiriScore(null);
              setkekuatanScore(null);
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
