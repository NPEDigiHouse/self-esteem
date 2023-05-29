import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import { Button, Divider, Slider, Stack, useMantineTheme } from "@mantine/core";
import PersonalityTestJumbotron from "./PersonalityTestJumbotron.section";
import PersonalityTestInformation from "./PersonalityTestInformation.section";
import Question from "../../components/Questions.component";
import { IQuestionPack, QuestionPack } from "../../utils/const/questions";
import { SearchIcon } from "../../assets/icons/Fluent";
import PersonalityTestResult from "./PersonalityTestResult.section";
import { useScrollIntoView, useWindowScroll } from "@mantine/hooks";
import { AppContext } from "../../context/app-context.context";

export interface IPersonalityTest {}

const PersonalityTest: React.FC<IPersonalityTest> = ({}) => {
  const { result, resultPercentage, setResult, setResultPercentage } =
    useContext(AppContext);

  const theme = useMantineTheme();

  const [scene, setScene] = useState<"pertanyaan" | "hasil">(
    result == null ? "pertanyaan" : "hasil"
  );

  const [scroll, scrollTo] = useWindowScroll();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    duration : 500
  });
  const { scrollIntoView: scrollIntoView2, targetRef: targetRef2 } = useScrollIntoView<HTMLDivElement>({
    duration : 500
  });

  const [progressCount, setProgressCount] = useState<number>(0);
  const progressPercentage: number =
    (progressCount / QuestionPack.length) * 100;

  // useEffect(() => {
  //   scrollTo({ y: (scene=="hasil"? 1000 : 500) });
  // }, [scene]);

  return (
    <MainLayout>
      <Stack className="mb-40 relative">
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
        <PersonalityTestJumbotron />
        <PersonalityTestInformation />
        <div ref={targetRef} className="absolute top-[1200px] bg-error-50 self-center -z-10"></div>
        <div ref={targetRef2} className="absolute top-[900px] bg-error-50 self-center -z-10"></div>
        {scene === "pertanyaan" && result == null ? (
          <>
            <Stack className="mt-36 gap-24 mb-10">
              {QuestionPack?.map((question: IQuestionPack, e: number) => {
                return (
                  <>
                    <Question
                      key={e}
                      idx={e + 1}
                      questions={question.question}
                      progressCount={progressCount}
                      setProgressCount={setProgressCount}
                    />
                    {e + 1 < QuestionPack.length && (
                      <Divider key={e} className="w-[90%] self-center" />
                    )}
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
              disabled={progressPercentage < 100}
              onClick={() => {
                setScene("hasil");
                // scrollTo({ y: 1000 });
                setProgressCount(0);

                setResult("Rendah");
                scrollIntoView({
                  alignment: "center"
                });
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
