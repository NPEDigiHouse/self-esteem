import { Group, Radio, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import AnswerCircle from "./AnswerCircle.component";
import QuestionCircleComponent, {
  IQuestionCircleComponent
} from "./QuestionCircle.component";
import usePrevious from "../hooks/usePrevious";

export interface IQuestion {
  progressCount: number;
  setProgressCount: React.Dispatch<React.SetStateAction<number>>;
}

const answerPointList: Array<IQuestionCircleComponent> = [
  {
    order: 1,
    point: -15,
    focusedChoice: 0
  },
  {
    order: 2,
    point: -10,
    focusedChoice: 0
  },
  {
    order: 3,
    point: -5,
    focusedChoice: 0
  },
  {
    order: 4,
    point: 0,
    focusedChoice: 0
  },
  {
    order: 5,
    point: 5,
    focusedChoice: 0
  },
  {
    order: 6,
    point: 10,
    focusedChoice: 0
  },
  {
    order: 7,
    point: 15,
    focusedChoice: 0
  }
];

const Question: React.FC<IQuestion> = ({ progressCount, setProgressCount }) => {
  const [focusedChoice, setFocusedChoice] = useState<number | null>(null);
  const prevFocusedChoice = usePrevious(focusedChoice);
  const [addPoint, setAddPoint] = useState(0);
  const [addProgress, setaddProgress] = useState(0);

  console.log(focusedChoice, "focusedChoice");
  console.log(prevFocusedChoice, "prevFocusedChoice");
  console.log(addPoint, "addPoint");
  console.log(progressCount, "addProgress");

  function chooseNewChoice(order: number, point: number) {
    if (focusedChoice == order) {
      setFocusedChoice(null);
      setAddPoint(0);
      setProgressCount(progressCount - 1);
    } else {
      setFocusedChoice(order);
      setAddPoint(point);
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
  }, [focusedChoice]);

  return (
    <Stack className="w-[80%] self-center">
      <Text className="text-center text-xl text-primary-text-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non
        voluptatum, minima magnam adipisci totam nam quam ex obcaecati impedit
        iste illo incidunt ullam, dignissimos fugiat quod omnis asperiores
        aperiam?
      </Text>
      <div className="self-center">
        <Group className="gap-6 self-center flex-nowrap">
          <Text className="self-end mb-1 text-error-500 text-xl font-poppins">
            Disagree
          </Text>
          {answerPointList?.map((point: IQuestionCircleComponent) => {
            return (
              <QuestionCircleComponent
                key={point.order}
                order={point.order}
                point={point.point}
                focusedChoice={focusedChoice}
                chooseNewChoice={chooseNewChoice}
              />
            );
          })}
          <Text className="self-end mb-1 text-green-500 text-xl font-poppins">
            Agree
          </Text>
        </Group>
      </div>
    </Stack>
  );
};
export default Question;
