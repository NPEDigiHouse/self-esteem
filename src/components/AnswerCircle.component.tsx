import React from "react";
import { AnswerCircleColorType } from "../utils/const/types";

export interface IAnswerCircle {
  size?: "sm" | "md" | "lg";
  color?: AnswerCircleColorType;
  onClick?: () => void;
  clickable?: boolean;
  focus?: boolean;
}

const AnswerCircle: React.FC<IAnswerCircle> = ({
  size = "md",
  color = "step2",
  focus = false,
  onClick = () => {},
  clickable = true
}) => {
  if (focus) {
    console.log("bg-" + color.split("-").at(-1));
  }
  return (
    <div
      onClick={onClick}
      className={`${clickable ? "cursor-pointer" : ""} ${
        size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
      } ${
        focus ? `${"bg-"+color }` : "bg-white"
      } rounded-full border-[4px] ${"border-"+color}`}
    ></div>
  );
};
export default AnswerCircle;
