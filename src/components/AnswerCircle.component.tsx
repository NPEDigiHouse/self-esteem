import React from "react";
import { CheckOutline } from "../assets/icons/Fluent";
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
  color = "step2",
  focus = false,
  onClick = () => {},
  clickable = true,
  disabled = false
}) => {
  let cn = "";

  if (color == "step2") {
    cn = `flex ${clickable ? "cursor-pointer" : ""}
    w-full h-full
    ${
      focus
        ? `bg-white`
        : `bg-white ${clickable ? "hover:bg-secondary-400" : ""} `
    }   ${
      disabled ? "!cursor-default !border-secondary-600 !bg-secondary-400" : ""
    }`;
  } else if (color == "step3") {
    cn = `flex ${clickable ? "cursor-pointer" : ""}
    w-full h-full
    ${
      focus
        ? `bg-white`
        : `bg-white ${clickable ? "hover:bg-secondary-400" : ""} `
    }   ${
      disabled ? "!cursor-default !border-secondary-600 !bg-secondary-400" : ""
    }`;
  } else if (color == "primaryDarkBlue") {
    cn = `flex ${clickable ? "cursor-pointer" : ""}
    w-full h-full
    ${
      focus
        ? `bg-white`
        : `bg-white ${clickable ? "hover:bg-secondary-400" : ""} `
    }   ${
      disabled ? "!cursor-default !border-secondary-600 !bg-secondary-400" : ""
    }`;
  } else {
    cn = `flex ${clickable ? "cursor-pointer" : ""}
    w-full h-full
    ${
      focus
        ? `bg-white`
        : `bg-white ${clickable ? "hover:bg-secondary-400" : ""} `
    }   ${
      disabled ? "!cursor-default !border-secondary-600 !bg-secondary-400" : ""
    }`;
  }

  return <div onClick={disabled ? () => {} : onClick} className={"w-full  h-full border-b-[2px] !border-primary-text-500"}>
    <div className={cn}>
      {
        focus?
        <CheckOutline size={28} className="self-center w-full align-middle mb-3" />
        :
        null
      }
    </div>
  </div>;
};
export default AnswerCircle;
