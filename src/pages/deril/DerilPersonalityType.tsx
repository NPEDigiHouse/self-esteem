import { Image, Stack, Text, Group, Grid, Divider } from "@mantine/core";
import React from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import uinLogo from "../../assets/images/uin-logo.png";
import { AnxietyPersonIcon } from "../../assets/icons/Fluent";
import PersonalityTypeCard from "../../components/PersonalityTypeCard.component";
import PersonalityTypeList from "../personality-type/PersonalityTypeList.section";

export interface IDerilPersonalityType {}

const DerilPersonalityType: React.FC<IDerilPersonalityType> = ({}) => {
  return (
    <MainLayout>
      <Stack className="justify-center w-[100%] self-center gap-10 md:gap-10 flex-nowrap">
        <div className="w-[72px] ml-10 mt-4 hidden md:block">
          <Image src={uinLogo} className="" />
        </div>

        <divt>
          <a href=" "></a>
          <h1 className="text-center font-poppins-bold text-[36px] md:text-[46px] text-primary-text-500 pb-7 ">
            Self Esteem
          </h1>
          <Grid className="justify-center ">
            <div className="p-4 rounded-lg self-center  bg-secondary-500 overflow-hidden max-w-[440px] ">
              <AnxietyPersonIcon size={320} className="self-center " />
            </div>

            <Text className="text-[18px] pt-7 md:text-xl text-primary-text-500 tracking-4 text-center text-justify px-20">
              Tingkat kecemasan bisa diklasifikasikan menjadi setidaknya 3
              kelompok: rendah, sedang dan tinggi. Tingkat kecemasan bisa
              memberikan gambaran yang jelas tentang sejauh mana kecemasan
              mempengaruhi kesejahteraan seseorang.
              <br />
              Klasifikasi tingkat kecemasan juga penting membantu menentukan
              strategi pengelolaan yang sesuai dengan tingkat kecemasan yang
              dialami, dan memberikan pemahaman yang lebih komprehensif tentang
              pengalaman kecemasan.
            </Text>
          </Grid>
          <Stack className="mt-32">
            <Stack>
              <Text className="font-roboto-semibold text-[32px] md:text-[38px] text-pastel-primary-text z-10 text-center self-center w-fit">
                Detail 3 Tingkat Self Esteem
              </Text>
            </Stack>
            <Grid gutter={50} className="mx-12 mt-4">
              <Grid.Col span={6} md={4}>
                <PersonalityTypeCard
                  anxietyLevel={"Rendah"}
                  description="Siswa memiliki persepsi positif terhadap diri dan lingkungan yang mendukungnya untuk dapat melakukan interaksi sosial dengan baik"
                />
              </Grid.Col>
              <Grid.Col span={6} md={4}>
                <PersonalityTypeCard
                  anxietyLevel={"Sedang"}
                  description="Siswa cukup memiliki persepsi negatif terhadap diri dan lingkungan yang mengakibatkan siswa melakukan penghindaran sosial"
                />
              </Grid.Col>
              <Grid.Col span={6} md={4}>
                <PersonalityTypeCard
                  anxietyLevel={"Tinggi"}
                  description="Siswa memiliki persepsi negatif terhadap diri dan lingkungannya yang mengakibatkan siswa melakukan penghindaran sosial"
                />
              </Grid.Col>
              {/* <Grid.Col span={3}>
          <PersonalityTypeCard imgSrc={readingBook} />
        </Grid.Col>
        <Grid.Col span={3}>
          <PersonalityTypeCard imgSrc={advertising} />
        </Grid.Col>
        <Grid.Col span={3}>
          <PersonalityTypeCard imgSrc={stayHome} />
        </Grid.Col>
        <Grid.Col span={3}>
          <PersonalityTypeCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <PersonalityTypeCard imgSrc={advertising} />
        </Grid.Col> */}
            </Grid>
          </Stack>
        </divt>
      </Stack>
    </MainLayout>
  );
};
export default DerilPersonalityType;
