import { Stack, Text } from "@mantine/core";
import React from "react";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  return (
    <Stack className="bg-primary-text-600 py-8 mt-32">
      <Text className="text-white text-lg text-center tracking-4">
        &copy; 2023 UIN Satu Tulungagung - All rights reserved
      </Text>
    </Stack>
  );
};

export default FooterLayout;
