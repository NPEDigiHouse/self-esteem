import React from "react";
import { AnswerCircleColorType } from "../utils/const/types";

export interface IAnswerCircle {
  size?: "sm" | "md" | "lg";
  color?: AnswerCircleColorType;
  onClick?: () => void;
  clickable?: boolean;
  focus?: boolean;
  disabled?: boolean;
}

const AnswerCircle: React.FC<IAnswerCircle> = ({
  size = "md",
  color = "step2",
  focus = false,
  onClick = () => {},
  clickable = true,
  disabled = false
}) => {
  let cn = "";

  if (color == "step2") {
    cn = `${clickable ? "cursor-pointer" : ""} ${
      size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
    } ${
      focus
        ? `bg-step2`
        : `bg-white ${clickable ? "hover:bg-step2/[0.25]" : ""} `
    } rounded-full border-[4px] border-step2 ${
      disabled ? "!cursor-default !border-secondary-600 !bg-secondary-400" : ""
    }`;
  } else if (color == "step3") {
    cn = `${clickable ? "cursor-pointer" : ""} ${
      size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
    } ${
      focus
        ? `bg-step3`
        : `bg-white ${clickable ? "hover:bg-step3/[0.25]" : ""} `
    } rounded-full border-[4px] border-step3 ${
      disabled ? "!cursor-default !border-secondary-600 !bg-secondary-400" : ""
    }`;
  } else if (color == "primaryDarkBlue") {
    cn = `${clickable ? "cursor-pointer" : ""} ${
      size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
    } ${
      focus
        ? `bg-primaryDarkBlue`
        : `bg-white ${clickable ? "hover:bg-primaryDarkBlue/[0.25]" : ""} `
    } rounded-full border-[4px] border-primaryDarkBlue ${
      disabled ? "!cursor-default !border-secondary-600 !bg-secondary-400" : ""
    }`;
  } else {
    cn = `${clickable ? "cursor-pointer" : ""} ${
      size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
    } ${
      focus
        ? `bg-primaryGreen`
        : `bg-white ${clickable ? "hover:bg-primaryGreen/[0.25]" : ""} `
    } rounded-full border-[4px] border-primaryGreen ${
      disabled ? "!cursor-default !border-secondary-600 !bg-secondary-400" : ""
    }`;
  }

  return <div onClick={disabled ? () => {} : onClick} className={cn}></div>;
};
export default AnswerCircle;
