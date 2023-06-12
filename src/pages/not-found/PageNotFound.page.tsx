import React from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import { Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";

export interface IPageNotFound {}

const PageNotFound: React.FC<IPageNotFound> = ({}) => {
  return (
    <MainLayout>
      <Stack className="mt-36 gap-10">
        <Text className="bg-sc-cp-800 text-white  text-[24px] sm:text-[48px] md:text-[54px] font-roboto-bold px-8 rounded-sm py-2 self-center text-center">
          Halaman Tidak Ditemukan
        </Text>
        <Text className="text-lg sm:text-xl text-primary-text-500 self-center text-center">
          Link atau halaman tidak ditemukan, klik
          <Link to={ROUTES.home} className="text-primaryBlue-900"> di sini</Link>
          {" "}untuk kembali ke halaman beranda
        </Text>
      </Stack>
    </MainLayout>
  );
};
export default PageNotFound;
