import { Stack, Text } from "@mantine/core";
import React from "react";
import AnswerCircle from "./AnswerCircle.component";

export interface IQuestionCircleComponent {
  order:number;
  point:number;
  focusedChoice:number|null;
  chooseNewChoice?:(a:number, b:number)=>void;
}

const QuestionCircleComponent: React.FC<IQuestionCircleComponent> = ({order, point, chooseNewChoice, focusedChoice}) => {
  return (
    <Stack className="bg-white gap-1">
      <Text className="text-center font-semibold text-secondary-text-500">
      {order}
      </Text>
      <AnswerCircle
        focus={focusedChoice == order}
        onClick={() => {
          chooseNewChoice!(order, point);
        }}
      />
    </Stack>
  );
};
export default QuestionCircleComponent;
