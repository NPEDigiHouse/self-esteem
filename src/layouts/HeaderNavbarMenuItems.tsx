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
      className={`px-4 py-2 rounded-full ${
        isActive
          ? `bg-white border border-white ${
              isScrolled ? "!border-secondary-500 bg-error-50" : "shadow-lg"
            }`
          : "bg-transparent"
      }`}
      onClick={onClick}
    >
      <Text className="font-poppins-semibold text-lg tracking-[0.04em] text-pastel-primary-text">
        {label}
      </Text>
    </Link>
  );
};
export default HeaderNavbarMenuItems;
