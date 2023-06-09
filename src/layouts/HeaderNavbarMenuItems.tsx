import { Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export interface IHeaderNavbarMenuItems {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
  isScrolled?: boolean;
}

const HeaderNavbarMenuItems: React.FC<IHeaderNavbarMenuItems> = ({
  href,
  label,
  isActive = false,
  onClick,
  isScrolled = false
}) => {
  return (
    <Link
      to={href}
      className={`px-4 py-2 rounded-sm ${
        isActive
          ? `bg-sc-cp-900 text-white ${
              isScrolled ? "" : ""
            }`
          : "bg-transparent text-primary-text-500"
      }`}
      onClick={onClick}
    >
      <Text className="font-roboto-semibold text-lg tracking-2">
        {label}
      </Text>
    </Link>
  );
};
export default HeaderNavbarMenuItems;
