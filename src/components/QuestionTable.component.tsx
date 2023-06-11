import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import { IQuestionPack } from "../utils/const/questions";
import Question from "./Questions.component";
import useArray from "../hooks/useArray";
import {
  negativeAnswerPointList,
  positiveAnswerPointList
} from "../utils/const/answesList";

export interface IQuestionTable {
  progressCount: number;
  setProgressCount: React.Dispatch<React.SetStateAction<number>>;
  updateScore: any;
  disabled?: boolean;
  getError?: () => void;
  questionPack?: Array<IQuestionPack>;
  questionType: string;
}

const QuestionTable: React.FC<IQuestionTable> = ({
  progressCount,
  setProgressCount,
  updateScore,
  disabled,
  getError,
  questionPack = [],
  questionType
}) => {
  return (
    <Stack className="">
      <Stack className="gap-0">
        <Stack className="relative w-[95%] sm:w-[90%] self-center">
          <div className="absolute top-6 w-[90%] bg-secondary-500 h-[1px] self-center"></div>
          <Text className=" self-center tracking-4 text-[28px] sm:text-[32px] font-roboto-bold text-center bg-white z-10 px-8 text-primary-text-500">
            {questionType}
          </Text>
        </Stack>
        <Text className="text-center text-secondary-text-500 -mt-1">
          {questionPack.length} Pertanyaan
        </Text>
      </Stack>
      <Grid
        className={`w-[90%] self-center mt-10`}
        // onClick={disabled ? getError : () => {}}
      >
        {/* ${!isPositive? "bg-error-500/[0.2]" : "bg-primaryGreen/[0.2]"} */}
        <Grid.Col
          md={9}
          span={6}
          className={`border-l-2 border-r border-y-2 z-10 border-primary-text-500 flex items-center flex-col p-4`}
        >
          <Text
            className={`font-roboto-bold text-start self-start text-lg sm:text-xl tracking-4 h-fit align-middle bg-white text-primary-text-500`}
          >
            Pertanyaan
          </Text>
        </Grid.Col>
        <Grid.Col
          md={3}
          span={6}
          className="border border-primary-text-500 p-0 bg-secondary-text-500"
        >
          <Grid
            className="gap-0 flex-nowrap w-full self-center h-full"
            gutter={0}
          >
            <Grid.Col span={3} className="border border-primary-text-500">
              <Text
                className={`text-center font-semibold text-white h-full flex items-center justify-center bg-answer-gradient-50`}
              >
                SS
              </Text>
            </Grid.Col>
            <Grid.Col span={3} className="border border-primary-text-500">
              <Text
                className={`text-center font-semibold text-white h-full flex items-center justify-center bg-answer-gradient-200`}
              >
                S
              </Text>
            </Grid.Col>
            <Grid.Col span={3} className="border border-primary-text-500">
              <Text
                className={`text-center font-semibold text-white h-full flex items-center justify-center bg-answer-gradient-400`}
              >
                KS
              </Text>
            </Grid.Col>
            <Grid.Col span={3} className="border border-primary-text-500">
              <Text
                className={`text-center font-semibold text-white h-full flex items-center justify-center bg-answer-gradient-800`}
              >
                TS
              </Text>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      {questionPack?.map((question: IQuestionPack, e: number) => {
        const answerPointList = !question.isPositive
          ? positiveAnswerPointList
          : negativeAnswerPointList;
          
        return (
          <>
            <Question
              key={e}
              idx={e}
              answerPointList={answerPointList}
              isPositive={question.isPositive}
              questions={question.question}
              progressCount={progressCount}
              setProgressCount={setProgressCount}
              updateScore={updateScore}
              getError={getError}
              disabled={disabled}
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
  );
};
export default QuestionTable;
