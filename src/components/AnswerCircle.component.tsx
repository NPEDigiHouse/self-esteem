import React from "react";

export interface IAnswerCircle {
  size?: "sm" | "md" | "lg";
  color?: "disagree" | "natural" | "green";
  onClick?: () => void;
  clickable?: boolean;
  focus?: boolean;
}

const AnswerCircle: React.FC<IAnswerCircle> = ({
  size = "md",
  color = "disagree",
  focus = false,
  onClick = () => {},
  clickable = true
}) => {
  return (
    <div
      onClick={onClick}
      className={`${clickable ? "cursor-pointer" : ""} ${
        size == "md" ? "h-10 w-10" : size == "sm" ? "h-8 w-8" : "h-12 w-12"
      } ${
        focus? "bg-error-50" : "bg-white"
      } rounded-full border-[4px] border-error-500`}
    ></div>
  );
};
export default AnswerCircle;
