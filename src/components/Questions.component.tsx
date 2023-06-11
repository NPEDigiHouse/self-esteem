import { Grid, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import usePrevious from "../hooks/usePrevious";
import {
  negativeAnswerPointList,
  positiveAnswerPointList
} from "../utils/const/answesList";
import { AnswerCircleColorType } from "../utils/const/types";
import QuestionCircleComponent, {
  IQuestionCircleComponent
} from "./QuestionCircle.component";

export interface IQuestion {
  progressCount: number;
  idx: number;
  setProgressCount: React.Dispatch<React.SetStateAction<number>>;
  questions: string;
  isPositive: boolean;
  answerPointList: Array<IQuestionCircleComponent>;
  updateScore: any;
  disabled?: boolean;
  getError?: () => void;
}

const answerChoiceColour: Array<AnswerCircleColorType> = [
  "primaryGreen",
  "step2",
  "step3",
  "primaryDarkBlue"
];

const Question: React.FC<IQuestion> = ({
  progressCount,
  idx,
  setProgressCount,
  questions,
  isPositive,
  answerPointList,
  updateScore,
  disabled = false,
  getError = () => {}
}) => {
  const [focusedChoice, setFocusedChoice] = useState<number | null>(null);
  const prevFocusedChoice = usePrevious(focusedChoice);
  const [currPoint, setCurrPoint] = useState(0);

  // const [answerPointList] = useState<Array<IQuestionCircleComponent>>(
  //   !isPositive ? positiveAnswerPointList : negativeAnswerPointList
  // );
  // if (idx < 2) {
  //   console.log(questions);
  //   console.log(isPositive);
  //   console.log(answerPointList);
  // }

  function chooseNewChoice(order: number, point: number) {
    if (focusedChoice == order) {
      setFocusedChoice(null);
      setCurrPoint(0);
      setProgressCount(progressCount - 1);
    } else {
      setFocusedChoice(order);
      setCurrPoint(point);
      setProgressCount(progressCount + 1);
    }
  }

  useEffect(() => {
    if (
      typeof prevFocusedChoice == "number" &&
      typeof focusedChoice == "number"
    ) {
      setProgressCount(progressCount - 1);
    }

    updateScore(idx, currPoint);
  }, [focusedChoice]);

  return (
    <Grid
      className={`w-[90%] self-center`}
      onClick={disabled ? getError : () => {}}
    >
      {/* ${!isPositive? "bg-error-500/[0.2]" : "bg-primaryGreen/[0.2]"} */}
      <Grid.Col
        span={9}
        className={`border-l-2 border-r border-b-2 z-10 border-primary-text-500 flex items-center flex-col p-4 pb-8`}
      >
        <Text
          className={`text-start self-start text-xl tracking-4 h-fit align-middle bg-white ${
            disabled ? "text-secondary-text-500" : "text-primary-text-500"
          }`}
        >
          {idx + 1}. {questions}
        </Text>
      </Grid.Col>
      <Grid.Col span={3} className="p-0 bg-secondary-text-500">
        <Grid
          className="gap-0 flex-nowrap w-full self-center h-full"
          gutter={0}
        >
          {answerPointList?.map(
            (point: IQuestionCircleComponent, e: number) => {
              return (
                <Grid.Col span={3}>
                  <QuestionCircleComponent
                    size={e + 1}
                    key={point.order + questions}
                    order={point.order}
                    point={point.point}
                    desc={point.desc}
                    focusedChoice={focusedChoice}
                    chooseNewChoice={chooseNewChoice}
                    color={answerChoiceColour[e]}
                    disabled={disabled}
                  />
                </Grid.Col>
              );
            }
          )}
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default Question;
