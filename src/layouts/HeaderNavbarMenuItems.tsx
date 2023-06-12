import { Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export interface IHeaderNavbarMenuItems {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

const HeaderNavbarMenuItems: React.FC<IHeaderNavbarMenuItems> = ({
  href,
  label,
  isActive = false,
  onClick
}) => {
  return (
    <Link
      to={href}
      className={`px-2 sm:px-4 py-1 sm:py-2 rounded-sm ${
        isActive
          ? `bg-sc-cp-900 text-white `
          : "bg-transparent text-primary-text-500"
      }`}
      onClick={onClick}
    >
      <Text className="font-roboto-semibold text-md sm:text-lg sm:tracking-2 text-center sm:text-start">{label}</Text>
    </Link>
  );
};
export default HeaderNavbarMenuItems;
