import { Stack, Text } from "@mantine/core";
import React from "react";
import AnswerCircle from "./AnswerCircle.component";
import { AnswerCircleColorType } from "../utils/const/types";

export interface IQuestionCircleComponent {
  size?: number;
  order: number;
  point: number;
  desc?: String;
  focusedChoice?: number | null;
  chooseNewChoice?: (a: number, b: number) => void;
  color?: AnswerCircleColorType ;
  disabled?: boolean;
}

const QuestionCircleComponent: React.FC<IQuestionCircleComponent> = ({
  size = 1,
  order,
  point,
  chooseNewChoice,
  focusedChoice=0,
  color="step2",
  disabled= false,
  desc
}) => {
  
  return (
    <Stack className="gap-0 h-full border-x border-primary-text-500 items-stretch">
      <AnswerCircle
        // size={
        //   size == 1 || size == 5
        //     ? "lg"
        //     : size == "2" || size == "4"
        //     ? "md"
        //     : "sm"
        // }
        color={color}
        focus={focusedChoice == order}
        onClick={() => {
          chooseNewChoice!(order, point);
        }}
        disabled={disabled}
      />
    </Stack>
  );
};
export default QuestionCircleComponent;
