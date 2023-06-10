import { IQuestionCircleComponent } from "../../components/QuestionCircle.component";

export const positiveAnswerPointList: Array<IQuestionCircleComponent> = [
  {
    order: 1,
    desc: "SS",
    point: 1
  },
  {
    order: 2,
    desc: "S",
    point: 2
  },
  {
    order: 3,
    desc: "KS",
    point: 3
  },
  {
    order: 4,
    desc: "TS",
    point: 4
  }
];

export const negativeAnswerPointList: Array<IQuestionCircleComponent> = [
  {
    order: 1,
    desc: "SS",
    point: 4
  },
  {
    order: 2,
    desc: "S",
    point: 3
  },
  {
    order: 3,
    desc: "KS",
    point: 2
  },
  {
    order: 4,
    desc: "TS",
    point: 1
  }
];
