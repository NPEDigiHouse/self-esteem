import React from "react";

export interface IDotDivider {
  type?: "light" | "dark";
}

const DotDivider: React.FC<IDotDivider> = ({ type = "light" }) => {
  return (
    <div
      className={`w-2 h-2 ${
        type == "light" ? "bg-secondary-500" : "bg-primary-text-500"
      } rounded-full`}
    ></div>
  );
};
export default DotDivider;
