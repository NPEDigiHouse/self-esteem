import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import { Slider, Stack } from "@mantine/core";
import PersonalityTestJumbotron from "./PersonalityTestJumbotron.section";
import PersonalityTestInformation from "./PersonalityTestInformation.section";
import Question from "../../components/Questions.component";
import { IQuestionPack, QuestionPack } from "../../utils/const/questions";

export interface IPersonalityTest {}

const PersonalityTest: React.FC<IPersonalityTest> = ({}) => {
  const [progressCount, setProgressCount] = useState<number>(0);
  const progressPercentage : number = (progressCount / QuestionPack.length) * 100

  return (
    <MainLayout>
      <Stack className="">
        {progressCount != 0 && (
          <div className="w-1/2 self-center py-1 px-2 bg-white rounded-full fixed bottom-6 z-[100]">
            <Slider
              size={"xs"}
              radius={"xl"}
              value={progressPercentage}
              thumbSize={10}
              labelAlwaysOn
              label={(value) => `${value==100? value : value.toFixed(2)} %`}
              color="gray"
            />
          </div>
        )}
        <PersonalityTestJumbotron />
        <PersonalityTestInformation />
        <Stack className="mt-20 gap-20 mb-10">
          {QuestionPack?.map((question: IQuestionPack, e: number) => {
            return (
              <Question
                key={e}
                questions={question.question}
                progressCount={progressCount}
                setProgressCount={setProgressCount}
              />
            );
          })}
        </Stack>
      </Stack>
    </MainLayout>
  );
};
export default PersonalityTest;
