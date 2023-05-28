import { Stack, Text } from "@mantine/core";
import React from "react";
import AnswerCircle from "./AnswerCircle.component";
import { AnswerCircleColorType } from "../utils/const/types";

export interface IQuestionCircleComponent {
  size?: number;
  order: number;
  point: number;
  focusedChoice: number | null;
  chooseNewChoice?: (a: number, b: number) => void;
  color?: AnswerCircleColorType ;
}

const QuestionCircleComponent: React.FC<IQuestionCircleComponent> = ({
  size = "md",
  order,
  point,
  chooseNewChoice,
  focusedChoice,
  color="step2"
}) => {
  return (
    <Stack className="bg-white gap-1 h-full">
      <Text className="text-center font-semibold text-secondary-text-500">
        {order}
      </Text>
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
      />
    </Stack>
  );
};
export default QuestionCircleComponent;
