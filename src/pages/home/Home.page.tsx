import { Stack } from "@mantine/core";
import React from "react";
import ParagraphWithImage from "../../components/ParagraphWithImage.component";
import MainLayout from "../../layouts/MainLayout.layout";
import HomeJumbotron from "./HomeJumbotron.section";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  return (
    <MainLayout>
      <Stack className="">
        <HomeJumbotron />
        <ParagraphWithImage
          primaryTitle=""
          // primaryTitle="Kata Pengantar"
          // secondaryTitle=""
          secondaryTitle="Kata Pengantar"
          paragraph="Berikut ini terdapat pernyataan-pernyataan yang berkenaan dengan skala kecemasan sosial siswa. Inventori ini bertujuan untuk penelitian kecemasan sosial siswa SMA guna menguji baliditas dan reliabilitas dari inventori berbasis web yang dikembangkan oleh kelompok. Disamping ini penelitian ini juga bertujuan untuk mengetahui tingkat kecemasan sosial yang dimiliki oleh siswa SMA. Hasil pengisian inventori ini hanya untuk kepentingan ilmiah dan tidak akan berpengaruh terhadap prestasi Anda di sekolah ini. Hal-hal yang bersifat pribadi akan dijaga kerahasiaannya oleh peneliti. Silahkan mengisi sesuai dengan keadaan Anda saat ini. Peneliti ucapkan terima kasih atas partisipasi Anda dalam mengisi inventori ini."
        />
        {/* <div className="h-[1000px]"></div> */}
      </Stack>
    </MainLayout>
  );
};
export default Home;
