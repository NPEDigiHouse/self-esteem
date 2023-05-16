import React from 'react';

export interface IVerticalDivider {
  h?: "sm" | "md" | "lg"
}

const VerticalDivider: React.FC<IVerticalDivider> = ({ h="md" }) => {
  return (
    <div className={`bg-secondary-500 w-[3px] ${h=="md"? "h-16" : (h=="sm"? "h-10" : "h-[200px]")} hidden md:block`}>
    </div>
  )
}
export default VerticalDivider;