import { Group, Radio, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import AnswerCircle from "./AnswerCircle.component";
import QuestionCircleComponent, {
  IQuestionCircleComponent
} from "./QuestionCircle.component";
import usePrevious from "../hooks/usePrevious";
import { AnswerCircleColorType } from "../utils/const/types";
import { negativeAnswerPointList, positiveAnswerPointList } from "../utils/const/answesList";

export interface IQuestion {
  progressCount: number;
  idx: number;
  setProgressCount: React.Dispatch<React.SetStateAction<number>>;
  questions: string;
  isPositive: boolean;
  updateScore: any;
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
  updateScore
}) => {
  const [focusedChoice, setFocusedChoice] = useState<number | null>(null);
  const prevFocusedChoice = usePrevious(focusedChoice);
  const [currPoint, setCurrPoint] = useState(0);
  const [addProgress, setaddProgress] = useState(0);

  const [answerPointList]= useState<Array<IQuestionCircleComponent>>(isPositive? positiveAnswerPointList : negativeAnswerPointList);

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
    <Stack className={`w-[80%] self-center `}>
      {/* ${!isPositive? "bg-error-500/[0.2]" : "bg-primaryGreen/[0.2]"} */}
      <Text className="text-center text-xl text-primary-text-500 tracking-4">
        {idx}. {questions}
      </Text>
      <div className="self-center">
        <Group className="gap-6 self-center flex-nowrap relative">
          <Text className="self-end mb-1 text-primaryGreen text-xl font-poppins absolute -left-40">
            Sangat Setuju
          </Text>
          <Group className="gap-8">
            {answerPointList?.map(
              (point: IQuestionCircleComponent, e: number) => {
                return (
                  <QuestionCircleComponent
                    size={e + 1}
                    key={point.order + questions}
                    order={point.order}
                    point={point.point}
                    focusedChoice={focusedChoice}
                    chooseNewChoice={chooseNewChoice}
                    color={answerChoiceColour[e]}
                  />
                );
              }
            )}
          </Group>
          <Text className="self-end mb-1 text-primaryDarkBlue text-xl font-poppins absolute -right-36">
            Tidak Setuju
          </Text>
        </Group>
      </div>
    </Stack>
  );
};
export default Question;

// import { Group, Radio, Stack, Text } from "@mantine/core";
// import React, { useEffect, useState } from "react";
// import AnswerCircle from "./AnswerCircle.component";
// import QuestionCircleComponent, {
//   IQuestionCircleComponent
// } from "./QuestionCircle.component";
// import usePrevious from "../hooks/usePrevious";

// export interface IQuestion {
//   progressCount: number;
//   setProgressCount: React.Dispatch<React.SetStateAction<number>>;
// }

// const answerPointList: Array<IQuestionCircleComponent> = [
//   {
//     order: 1,
//     point: -15,
//     focusedChoice: 0
//   },
//   {
//     order: 2,
//     point: -10,
//     focusedChoice: 0
//   },
//   {
//     order: 3,
//     point: -5,
//     focusedChoice: 0
//   },
//   {
//     order: 4,
//     point: 0,
//     focusedChoice: 0
//   },
//   {
//     order: 5,
//     point: 5,
//     focusedChoice: 0
//   },
//   {
//     order: 6,
//     point: 10,
//     focusedChoice: 0
//   },
//   {
//     order: 7,
//     point: 15,
//     focusedChoice: 0
//   }
// ];

// const Question: React.FC<IQuestion> = ({ progressCount, setProgressCount }) => {
//   const [focusedChoice, setFocusedChoice] = useState<number | null>(null);
//   const prevFocusedChoice = usePrevious(focusedChoice);
//   const [addPoint, setAddPoint] = useState(0);
//   const [addProgress, setaddProgress] = useState(0);

//   console.log(focusedChoice, "focusedChoice");
//   console.log(prevFocusedChoice, "prevFocusedChoice");
//   // console.log(addPoint, "addPoint");
//   // console.log(progressCount, "addProgress");

//   function chooseNewChoice(
//     order: number,
//     point: number,
//     prevChoice: number | null
//   ) {
//     if (focusedChoice == order) {
//       console.log('ke satu')
//       setFocusedChoice(null);
//       setAddPoint(0);
//       setProgressCount(progressCount - 1);
//     } else {
//       console.log('ke dua')
//       setFocusedChoice(order);
//       setAddPoint(point);
//       if (
//         typeof prevFocusedChoice !== "number" &&
//         typeof focusedChoice !== "number"
//       ) {
//         setProgressCount(progressCount + 1);
//       }
//     }

//     // if (typeof prevChoice === "number" && typeof focusedChoice === "number") {
//     //   setProgressCount(progressCount - 1);
//     // }
//   }

//   // useEffect(() => {
//   //   if (
//   //     typeof prevFocusedChoice === "number" &&
//   //     typeof focusedChoice === "number"
//   //   ) {
//   //     setProgressCount(progressCount - 1);
//   //   }
//   // }, [focusedChoice]);

//   return (
//     <Stack className="w-[80%] self-center">
//       <Text className="text-center text-xl text-primary-text-500">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non
//         voluptatum, minima magnam adipisci totam nam quam ex obcaecati impedit
//         iste illo incidunt ullam, dignissimos fugiat quod omnis asperiores
//         aperiam?
//       </Text>
//       <div className="self-center">
//         <Group className="gap-6 self-center flex-nowrap">
//           <Text className="self-end mb-1 text-error-500 text-xl font-poppins">
//             Disagree
//           </Text>
//           {answerPointList?.map((point: IQuestionCircleComponent) => {
//             return (
//               <QuestionCircleComponent
//                 key={point.order}
//                 order={point.order}
//                 point={point.point}
//                 focusedChoice={focusedChoice}
//                 chooseNewChoice={chooseNewChoice}
//                 prevFocusedChoice={prevFocusedChoice || null}
//               />
//             );
//           })}
//           <Text className="self-end mb-1 text-green-500 text-xl font-poppins">
//             Agree
//           </Text>
//         </Group>
//       </div>
//     </Stack>
//   );
// };
// export default Question;
