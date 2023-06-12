import {
  Button,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useScrollIntoView } from "@mantine/hooks";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { FileCheckIcon, SearchIcon } from "../../assets/icons/Fluent";
import {
  DatePickerInput,
  SelectInput,
  TextInput
} from "../../components/FormInput.component";
import QuestionTable from "../../components/QuestionTable.component";
import { AppContext } from "../../context/app-context.context";
import useArray from "../../hooks/useArray";
import MainLayout from "../../layouts/MainLayout.layout";
import { getQuestionPack } from "../../utils/const/questions";
import { TestResult } from "../../utils/const/types";
import {
  IPersonalityTestForm,
  personalityTestFormSchema
} from "./PersonalityTestFormInterfaces";
import PersonalityTestInformation from "./PersonalityTestInformation.section";
import PersonalityTestJumbotron from "./PersonalityTestJumbotron.section";
import PersonalityTestResult from "./PersonalityTestResult.section";

export interface IPersonalityTest {}

const defaultScoreArrKekuatan: Array<number> = Array(
  getQuestionPack()[0].questions.length
).fill(0);
const defaultScoreArrKebajikan: Array<number> = Array(
  getQuestionPack()[1].questions.length
).fill(0);
const defaultScoreArrKeberartian: Array<number> = Array(
  getQuestionPack()[2].questions.length
).fill(0);
const defaultScoreArrKemampuanDiri: Array<number> = Array(
  getQuestionPack()[3].questions.length
).fill(0);

export function calculateResult(arrSum: number, arrLen: number) {
  let calc = (arrSum / (arrLen * 4)) * 100;

  return calc;
}

export function calculateClass(percentage: number) {
  if (percentage >= 66) {
    return "Tinggi" as TestResult;
  } else if (percentage >= 34) {
    return "Sedang" as TestResult;
  } else {
    return "Rendah" as TestResult;
  }
}

const PersonalityTest: React.FC<IPersonalityTest> = ({}) => {
  const {
    currentPage,
    result,
    setResult,
    setResultPercentage,
    currentTesterName,
    setCurrentTesterName,
    currentTesterSchool,
    currentTesterGender,
    setCurrentTesterSchool,
    setCurrentTesterGender,
    currentTesterBirthDate,
    setCurrentTesterBirthDate,
    setkebajikanScore,
    setkeberartianScore,
    setkekuatanScore,
    setkemampuanDiriScore
  } = useContext(AppContext);

  const QuestionPack = useMemo(() => getQuestionPack(), [currentPage]);

  const theme = useMantineTheme();

  const [scene, setScene] = useState<"pertanyaan" | "hasil">(
    result == null ? "pertanyaan" : "hasil"
  );

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    duration: 500
  });
  const { scrollIntoView: scrollIntoView2, targetRef: targetRef2 } =
    useScrollIntoView<HTMLDivElement>({
      duration: 500
    });

  const { array: strengthScoreArr, update: strengthUpdate } = useArray(
    defaultScoreArrKekuatan
  );
  const { array: kebajikanScoreArr, update: kebajikanUpdate } = useArray(
    defaultScoreArrKebajikan
  );
  const { array: keberartianScoreArr, update: keberartianUpdate } = useArray(
    defaultScoreArrKeberartian
  );
  const { array: kemampuanDiriScoreArr, update: kemampuanDiriUpdate } =
    useArray(defaultScoreArrKemampuanDiri);

  const [sumScoreArr, setSumScoreArr] = useState(
    strengthScoreArr.reduce(
      (partialSum: number, a: number) => partialSum + a,
      0
    ) +
      kebajikanScoreArr.reduce(
        (partialSum: number, a: number) => partialSum + a,
        0
      ) +
      keberartianScoreArr.reduce(
        (partialSum: number, a: number) => partialSum + a,
        0
      ) +
      kemampuanDiriScoreArr.reduce(
        (partialSum: number, a: number) => partialSum + a,
        0
      )
  );

  // console.log(QuestionPack)

  const [progressCount, setProgressCount] = useState<number>(0);
  const progressPercentage: number = (progressCount / 42) * 100;

  useEffect(() => {
    setSumScoreArr(
      strengthScoreArr.reduce(
        (partialSum: number, a: number) => partialSum + a,
        0
      ) +
        kebajikanScoreArr.reduce(
          (partialSum: number, a: number) => partialSum + a,
          0
        ) +
        keberartianScoreArr.reduce(
          (partialSum: number, a: number) => partialSum + a,
          0
        ) +
        kemampuanDiriScoreArr.reduce(
          (partialSum: number, a: number) => partialSum + a,
          0
        )
    );
  }, [
    strengthScoreArr,
    kebajikanScoreArr,
    keberartianScoreArr,
    kemampuanDiriScoreArr
  ]);

  // console.log("sumScoreArr", sumScoreArr);

  const { onSubmit, ...form } = useForm<IPersonalityTestForm>({
    validate: yupResolver(personalityTestFormSchema)
  });

  const { getInputProps, errors, setValues, values } = form;

  useEffect(() => {
    setValues({
      school: currentTesterSchool || undefined,
      gender: (currentTesterGender || undefined) as any,
      name: (currentTesterName || undefined) as any,
      birthDate: (currentTesterBirthDate || undefined) as any
    });
  }, []);

  // useEffect(() => {
  //   scrollTo({ y: (scene=="hasil"? 1000 : 500) });
  // }, [scene]);

  // console.log(values)

  return (
    <MainLayout>
      <Stack className="mb-16 relative">
        {/* {progressCount != 0 && (
          <div className="w-1/2 self-center py-1 px-2 bg-secondary-500 rounded-full fixed bottom-6 z-[100]">
            <Slider
              size={"xs"}
              radius={"xl"}
              value={progressPercentage}
              thumbSize={10}
              labelAlwaysOn
              label={(value) => `${value == 100 ? value : value.toFixed(1)} %`}
              color="gray"
              styles={{
                root: {}
              }}
            />
          </div>
        )} */}
        <PersonalityTestJumbotron
          scrollIntoView={result == null ? scrollIntoView2 : scrollIntoView}
        />
        <div
          ref={targetRef}
          className="absolute top-[1200px] self-center -z-10"
        ></div>
        <div
          ref={targetRef2}
          className="absolute top-[900px] self-center -z-10"
        ></div>
        {scene === "hasil" ? (
          <>
            <Stack className="mt-6 sm:mt-10 mb-10 gap-0">
              <Stack className="gap-8 w-[75%] self-center">
                <Stack className="gap-0">
                  <Group className="gap-2">
                    <FileCheckIcon size={32} color="#603991" />
                    <Text className="font-roboto-semibold text-2xl text-primary-text-500 ">
                      Pengisian Identitas
                    </Text>
                  </Group>
                  <Text className="text-lg text-primary-text-500 mt-4">
                    Pertanyaan kuesioner tidak bisa dijawab pertanyaan jika tidak
                    mengisi identitas terlebih dahulu.
                  </Text>
                </Stack>
                <Grid className="self-center" gutter={"lg"}>
                  <Grid.Col md={6}>
                    <Stack className="gap-[2px]">
                      <Text className="text-lg font-roboto text-primary-text-500 text-start">
                        Nama
                      </Text>
                      <TextInput
                        size="md"
                        {...getInputProps("name")}
                        disabled={progressPercentage != 0}
                        error={errors["name" as keyof IPersonalityTestForm]}
                        // value={(currentTesterName || null) as any}
                      />
                    </Stack>
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <Stack className="gap-[2px]">
                      <Text className="text-lg font-roboto text-primary-text-500 text-start">
                        Jenis Kelamin
                      </Text>
                      <SelectInput
                        data={[
                          {
                            value: "Perempuan",
                            label: "Perempuan"
                          },
                          {
                            value: "Laki-laki",
                            label: "Laki-laki"
                          },
                          {
                            value: "Dll.",
                            label: "Dll."
                          }
                        ]}
                        size="md"
                        {...getInputProps("gender")}
                        disabled={progressPercentage != 0}
                        error={errors["gender" as keyof IPersonalityTestForm]}
                        // value={(currentTesterGender || null) as any}
                      />
                    </Stack>
                  </Grid.Col>

                  <Grid.Col md={6}>
                    <Stack className="gap-[2px]">
                      <Text className="text-lg font-roboto text-primary-text-500 text-start">
                        Asal Instansi
                      </Text>
                      <TextInput
                        size="md"
                        {...getInputProps("school")}
                        disabled={progressPercentage != 0}
                        error={errors["school" as keyof IPersonalityTestForm]}
                        // value={(currentTesterName || null) as any}
                      />
                    </Stack>
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <Stack className="gap-[2px]">
                      <Text className="text-lg font-roboto text-primary-text-500 text-start">
                        Tanggal Lahir
                      </Text>
                      <DatePickerInput
                        size="md"
                        className="self-start w-full"
                        {...getInputProps("birthDate")}
                        // defaultValue={seminarDateDefault}
                      />
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Stack>

              <PersonalityTestInformation />
              <Stack className="gap-28 mt-20">
                {/* {QuestionPack.map((questions: IQuestionPackType, e: number) => {
                  return (
                    <QuestionTable
                      key={"questions:" + e}
                      progressCount={progressCount}
                      setProgressCount={setProgressCount}
                      updateScore={update : strengthUpdate}
                      disabled={
                        // values.school == null ||
                        // values.class == null ||
                        // values.gender == null ||
                        // values.name == null ||
                        // values.birthDate == null
                        false
                      }
                      getError={onSubmit(() => {})}
                      questionPack={questions.questions}
                      questionType={questions.type}
                    />
                  );
                })} */}

                <QuestionTable
                  progressCount={progressCount}
                  setProgressCount={setProgressCount}
                  updateScore={strengthUpdate}
                  disabled={
                    values.school == null ||
                    values.gender == null ||
                    values.name == null ||
                    values.birthDate == null ||
                    values.school == "" ||
                    values.gender == "" ||
                    values.name == "" ||
                    values.birthDate == ""
                  }
                  getError={onSubmit(() => {})}
                  questionPack={QuestionPack[0].questions}
                  questionType={QuestionPack[0].type}
                />
                <QuestionTable
                  progressCount={progressCount}
                  setProgressCount={setProgressCount}
                  updateScore={kebajikanUpdate}
                  disabled={
                    values.school == null ||
                    values.gender == null ||
                    values.name == null ||
                    values.birthDate == null ||
                    values.school == "" ||
                    values.gender == "" ||
                    values.name == "" ||
                    values.birthDate == ""
                  }
                  getError={onSubmit(() => {})}
                  questionPack={QuestionPack[1].questions}
                  questionType={QuestionPack[1].type}
                />
                <QuestionTable
                  progressCount={progressCount}
                  setProgressCount={setProgressCount}
                  updateScore={keberartianUpdate}
                  disabled={
                    values.school == null ||
                    values.gender == null ||
                    values.name == null ||
                    values.birthDate == null ||
                    values.school == "" ||
                    values.gender == "" ||
                    values.name == "" ||
                    values.birthDate == ""
                  }
                  getError={onSubmit(() => {})}
                  questionPack={QuestionPack[2].questions}
                  questionType={QuestionPack[2].type}
                />
                <QuestionTable
                  progressCount={progressCount}
                  setProgressCount={setProgressCount}
                  updateScore={kemampuanDiriUpdate}
                  disabled={
                    values.school == null ||
                    values.gender == null ||
                    values.name == null ||
                    values.birthDate == null ||
                    values.school == "" ||
                    values.gender == "" ||
                    values.name == "" ||
                    values.birthDate == ""
                  }
                  getError={onSubmit(() => {})}
                  questionPack={QuestionPack[3].questions}
                  questionType={QuestionPack[3].type}
                />
              </Stack>
            </Stack>
            <Button
              className="bg-sc-cp-900 hover:bg-sc-cp-900 rounded-sm w-[80%] !h-14 text-xl self-center font-normal mt-10"
              leftIcon={
                <SearchIcon
                  size={26}
                  className="mt-[2px]"
                  color={
                    progressPercentage < 100
                      ? theme.colors["secondary-text"][5]
                      : "#FFFFFF"
                  }
                />
              }
              disabled={progressPercentage < 100 || values?.name == null}
              onClick={() => {
                setScene("hasil");
                setProgressCount(0);
                scrollIntoView({
                  alignment: "center"
                });

                setCurrentTesterName(values.name.trim());
                setCurrentTesterSchool(values.school.trim());
                setCurrentTesterGender(values.gender.trim());
                setCurrentTesterBirthDate(values.birthDate);

                setkekuatanScore(
                  strengthScoreArr.reduce(
                    (partialSum: number, a: number) => partialSum + a,
                    0
                  )
                );

                setkebajikanScore(
                  kebajikanScoreArr.reduce(
                    (partialSum: number, a: number) => partialSum + a,
                    0
                  )
                );

                setkeberartianScore(
                  keberartianScoreArr.reduce(
                    (partialSum: number, a: number) => partialSum + a,
                    0
                  )
                );

                setkemampuanDiriScore(
                  kemampuanDiriScoreArr.reduce(
                    (partialSum: number, a: number) => partialSum + a,
                    0
                  )
                );

                let percentage = calculateResult(
                  sumScoreArr,
                  strengthScoreArr.length +
                    kebajikanScoreArr.length +
                    keberartianScoreArr.length +
                    kemampuanDiriScoreArr.length
                );

                if (percentage >= 66) {
                  setResult("Tinggi");
                } else if (percentage >= 34) {
                  setResult("Sedang");
                } else {
                  setResult("Rendah");
                }

                setResultPercentage(percentage);
              }}
            >
              Tampilkan Hasil Akhir
            </Button>
          </>
        ) : (
          <PersonalityTestResult
            scene={scene}
            setScene={setScene}
            scrollIntoView={scrollIntoView2}
          />
        )}
        {/* <div ref={targetRef}>asd</div> */}
      </Stack>
    </MainLayout>
  );
};
export default PersonalityTest;
