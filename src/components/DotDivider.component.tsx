import React from "react";

export interface IDotDivider {}

const DotDivider: React.FC<IDotDivider> = ({}) => {
  return <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>;
};
export default DotDivider;
