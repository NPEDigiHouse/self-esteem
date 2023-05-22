import { Divider, Grid, Image, Stack, Text } from "@mantine/core";
import studying from "../../assets/images/studying.png";
import advertising from "../../assets/images/advertising.png";
import readingBook from "../../assets/images/reading-book.png";
import stayHome from "../../assets/images/stay-home.png";
import React from "react";
import PersonalityTypeCard from "../../components/PersonalityTypeCard.component";

export interface IPersonalityTypeList {}

const PersonalityTypeList: React.FC<IPersonalityTypeList> = ({}) => {
  return (
    <Stack className="mt-32">
      <Stack>
        <Text className="font-poppins-semibold text-[38px] text-pastel-primary-text z-10 text-center self-center w-fit">
          Personality Type
          <Divider className="mt-2" />
        </Text>
      </Stack>
      <Grid gutter={50} className="mx-12 mt-4">
        <Grid.Col span={3}>
          <PersonalityTypeCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <PersonalityTypeCard imgSrc={advertising} />
        </Grid.Col>
        <Grid.Col span={3}>
          <PersonalityTypeCard />
        </Grid.Col>
        <Grid.Col span={3}>
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
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default PersonalityTypeList;
