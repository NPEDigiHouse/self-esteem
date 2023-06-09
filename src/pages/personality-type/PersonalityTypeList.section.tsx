import { Divider, Grid, Stack, Text } from "@mantine/core";
import React from "react";
import PersonalityTypeCard from "../../components/PersonalityTypeCard.component";

export interface IPersonalityTypeList {}

const PersonalityTypeList: React.FC<IPersonalityTypeList> = ({}) => {
  return (
    <Stack className="mt-32">
      <Stack>
        <Text className="font-roboto-semibold text-[32px] md:text-[38px] text-pastel-primary-text z-10 text-center self-center w-fit">
          Detail Tingkat Kecemasan
          <Divider className="mt-2" />
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
  );
};
export default PersonalityTypeList;
