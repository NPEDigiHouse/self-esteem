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

  let borderColor = "border-" + color;
  let backgroundColor = "bg-" + color;
  let cn = "";

  if (color == "step2") {
    cn = `${clickable ? "cursor-pointer" : ""} ${
      size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
    } ${
      focus
        ? `bg-step2`
        : `bg-white ${clickable ? "hover:bg-step2/[0.25]" : ""} `
    } rounded-full border-[4px] border-step2`;
  } else if (color == "step3") {
    cn = `${clickable ? "cursor-pointer" : ""} ${
      size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
    } ${
      focus
        ? `bg-step3`
        : `bg-white ${clickable ? "hover:bg-step3/[0.25]" : ""} `
    } rounded-full border-[4px] border-step3`;
  } else if (color == "primaryDarkBlue") {
    cn = `${clickable ? "cursor-pointer" : ""} ${
      size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
    } ${
      focus
        ? `bg-primaryDarkBlue`
        : `bg-white ${clickable ? "hover:bg-primaryDarkBlue/[0.25]" : ""} `
    } rounded-full border-[4px] border-primaryDarkBlue`;
  } else {
    cn = `${clickable ? "cursor-pointer" : ""} ${
      size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
    } ${
      focus
        ? `bg-primaryGreen`
        : `bg-white ${clickable ? "hover:bg-primaryGreen/[0.25]" : ""} `
    } rounded-full border-[4px] border-primaryGreen`;
  }

  return <div onClick={onClick} className={cn}></div>;
};
export default AnswerCircle;
