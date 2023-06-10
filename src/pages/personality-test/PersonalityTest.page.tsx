import {
  Button,
  Divider,
  Grid,
  Slider,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useScrollIntoView, useWindowScroll } from "@mantine/hooks";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { SearchIcon } from "../../assets/icons/Fluent";
import {
  MyNumberInput,
  SelectInput,
  TextInput
} from "../../components/FormInput.component";
import Question from "../../components/Questions.component";
import { AppContext } from "../../context/app-context.context";
import useArray from "../../hooks/useArray";
import MainLayout from "../../layouts/MainLayout.layout";
import { IQuestionPack, getQuestionPack } from "../../utils/const/questions";
import {
  IPersonalityTestForm,
  personalityTestFormSchema
} from "./PersonalityTestFormInterfaces";
import PersonalityTestInformation from "./PersonalityTestInformation.section";
import PersonalityTestJumbotron from "./PersonalityTestJumbotron.section";
import PersonalityTestResult from "./PersonalityTestResult.section";
import { positiveAnswerPointList } from "../../utils/const/answesList";
import { IQuestionCircleComponent } from "../../components/QuestionCircle.component";

export interface IPersonalityTest {}

const defaultScoreArr: Array<number> = Array(getQuestionPack().length).fill(0);

const PersonalityTest: React.FC<IPersonalityTest> = ({}) => {
  const {
    currentPage,
    result,
    resultPercentage,
    setResult,
    setResultPercentage,
    currentTesterName,
    setCurrentTesterName,
    currentTesterClass,
    currentTesterAge,
    currentTesterGender,
    setCurrentTesterAge,
    setCurrentTesterClass,
    setCurrentTesterGender
  } = useContext(AppContext);

  const QuestionPack = useMemo(() => getQuestionPack(), [currentPage]);

  const theme = useMantineTheme();

  const [scene, setScene] = useState<"pertanyaan" | "hasil">(
    result == null ? "pertanyaan" : "hasil"
  );

  const [scroll, scrollTo] = useWindowScroll();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    duration: 500
  });
  const { scrollIntoView: scrollIntoView2, targetRef: targetRef2 } =
    useScrollIntoView<HTMLDivElement>({
      duration: 500
    });

  const { array: scoreArr, update } = useArray(defaultScoreArr);
  const [sumScoreArr, setSumScoreArr] = useState(
    scoreArr.reduce((partialSum: number, a: number) => partialSum + a, 0)
  );

  const [progressCount, setProgressCount] = useState<number>(0);
  const progressPercentage: number =
    (progressCount / QuestionPack.length) * 100;

  useEffect(() => {
    setSumScoreArr(
      scoreArr.reduce((partialSum: number, a: number) => partialSum + a, 0)
    );
  }, [scoreArr]);

  const { onSubmit, ...form } = useForm<IPersonalityTestForm>({
    validate: yupResolver(personalityTestFormSchema)
  });
  console.log("Pertanyaan Positif: ");

  const { getInputProps, errors, setValues, values } = form;

  useEffect(() => {
    setValues({
      age: currentTesterAge || undefined,
      class: (currentTesterClass || undefined) as any,
      gender: (currentTesterGender || undefined) as any,
      name: (currentTesterName || undefined) as any
    });
  }, []);

  // useEffect(() => {
  //   scrollTo({ y: (scene=="hasil"? 1000 : 500) });
  // }, [scene]);

  let cn = "";
  cn = `text-center font-semibold text-white h-full pt-1 bg-primaryGreen`;

  return (
    <MainLayout>
      <Stack className="mb-16 relative">
        {progressCount != 0 && (
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
        )}
        <PersonalityTestJumbotron
          scrollIntoView={result == null ? scrollIntoView2 : scrollIntoView}
        />
        {/* <PersonalityTestInformation /> */}
        <div
          ref={targetRef}
          className="absolute top-[1200px] self-center -z-10"
        ></div>
        <div
          ref={targetRef2}
          className="absolute top-[900px] self-center -z-10"
        ></div>
        {scene === "pertanyaan" && result == null ? (
          <>
            <Stack className="mt-10 mb-10 gap-0">
              <Stack className="gap-12">
                <Stack className="gap-0">
                  <Text className="font-roboto-semibold text-2xl text-primary-text-500 text-center">
                    Pengisian Identitas
                  </Text>
                  <Text className="text-lg text-secondary-text-500 text-center">
                    Pertanyaan tes tidak bisa dijawab pertanyaan jika tidak
                    mengisi identitas terlebih dahulu.
                  </Text>
                </Stack>
                <Grid className="w-[80%] self-center" gutter={"xl"}>
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
                        Kelas
                      </Text>
                      <TextInput
                        size="md"
                        {...getInputProps("class")}
                        disabled={progressPercentage != 0}
                        error={errors["class" as keyof IPersonalityTestForm]}
                        // value={(currentTesterClass || null) as any}
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
                        Umur
                      </Text>
                      <MyNumberInput
                        size="md"
                        {...getInputProps("age")}
                        disabled={progressPercentage != 0}
                        error={errors["age" as keyof IPersonalityTestForm]}
                        min={0}
                        max={150}
                        type={"number"}
                        // value={(currentTesterAge || null) as any}
                      />
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Stack>
              <Stack className="gap-0 mt-20">
                <Text className="font-roboto-semibold text-2xl text-primary-text-500 text-center">
                  Pertanyaan
                </Text>
                <Text className="text-lg text-secondary-text-500 text-center w-[90%] self-center">
                  Pilih jawaban yang paling sesuai dengan pengalaman pribadi
                  Anda karena pilihan jawaban akan memberikan kontribusi
                  terhadap hasil akhir
                </Text>
              </Stack>
              <Grid
                className={`w-[90%] self-center mt-10`}
                // onClick={disabled ? getError : () => {}}
              >
                {/* ${!isPositive? "bg-error-500/[0.2]" : "bg-primaryGreen/[0.2]"} */}
                <Grid.Col
                  span={9}
                  className={`border-l-2 border-r border-y-2 z-10 border-primary-text-500 flex items-center flex-col p-4 pb-8`}
                >
                  <Text
                    className={`text-start self-start text-xl tracking-4 h-fit align-middle bg-white text-primary-text-500`}
                  >
                    Pertanyaan
                  </Text>
                </Grid.Col>
                <Grid.Col
                  span={3}
                  className="border border-primary-text-500 p-0 bg-secondary-text-500"
                >
                  <Grid
                    className="gap-0 flex-nowrap w-full self-center h-full"
                    gutter={0}
                  >
                    <Grid.Col
                      span={3}
                      className="border border-primary-text-500"
                    >
                      <Text
                        className={`text-center font-semibold text-white h-full pb-3 flex items-center justify-center bg-answer-gradient-50`}
                      >
                        SS
                      </Text>
                    </Grid.Col>
                    <Grid.Col
                      span={3}
                      className="border border-primary-text-500"
                    >
                      <Text
                        className={`text-center font-semibold text-white h-full pb-3 flex items-center justify-center bg-answer-gradient-200`}
                      >
                        S
                      </Text>
                    </Grid.Col>
                    <Grid.Col
                      span={3}
                      className="border border-primary-text-500"
                    >
                      <Text
                        className={`text-center font-semibold text-white h-full pb-3 flex items-center justify-center bg-answer-gradient-400`}
                      >
                        KS
                      </Text>
                    </Grid.Col>
                    <Grid.Col
                      span={3}
                      className="border border-primary-text-500"
                    >
                      <Text
                        className={`text-center font-semibold text-white h-full pb-3 flex items-center justify-center bg-answer-gradient-800`}
                      >
                        TS
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              </Grid>
              {QuestionPack?.map((question: IQuestionPack, e: number) => {
                return (
                  <>
                    <Question
                      key={e}
                      idx={e + 1}
                      isPositive={question.isPositive}
                      questions={question.question}
                      progressCount={progressCount}
                      setProgressCount={setProgressCount}
                      updateScore={update}
                      getError={onSubmit(() => {})}
                      disabled={
                        values.age == null ||
                        values.class == null ||
                        values.gender == null ||
                        values.name == null ||
                        typeof values.age != "number"
                      }
                    />
                    {/* {e + 1 < QuestionPack.length && (
                      <Divider
                        key={"divider-" + e}
                        className="w-[90%] self-center"
                      />
                    )} */}
                  </>
                );
              })}
            </Stack>
            <Button
              className="bg-primaryDarkBlue hover:bg-primaryDarkBlue rounded-full w-[80%] !h-14 text-xl self-center font-normal mt-20"
              rightIcon={
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
                setCurrentTesterAge(values.age);
                setCurrentTesterClass(values.class.trim());
                setCurrentTesterGender(values.gender.trim());

                let percentage =
                  (sumScoreArr / (QuestionPack.length * 4)) * 100;

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
              Lihat Hasil
            </Button>
          </>
        ) : (
          <PersonalityTestResult
            scene={scene}
            setScene={setScene}
            scrollTo={scrollTo}
            scrollIntoView={scrollIntoView2}
          />
        )}
        {/* <div ref={targetRef}>asd</div> */}
      </Stack>
    </MainLayout>
  );
};
export default PersonalityTest;
