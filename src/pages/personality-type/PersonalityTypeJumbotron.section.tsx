import { Button, Grid, Stack, Text } from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";
import { SearchIcon } from "../../assets/icons/Fluent";
import StackedPersonalityTypeImage from "../../components/StackedPersonalityTypeImage.component";
import advertising from "../../assets/images/advertising.png";
import readingBook from "../../assets/images/reading-book.png";
import stayHome from "../../assets/images/stay-home.png";
import studying from "../../assets/images/studying.png";

export interface IPersonalityTypeJumbotron {}

const PersonalityTypeJumbotron: React.FC<IPersonalityTypeJumbotron> = ({}) => {
  return (
    <Grid className="mt-32 w-[80%] self-center bg-white">
      <Grid.Col span={7}>
        <Stack>
          <Text className="font-poppins-semibold text-[54px] text-pastel-primary-text z-10">
            Personality Type
          </Text>
          <VerticalDivider h="md" />

          <Text className="text-[18px] self-center tracking-4 text-primary-text-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odio
            laboriosam nobis aperiam consectetur quam architecto consequuntur
            suscipit. Sequi culpa quia magnam blanditiis pariatur ducimus
            ratione fugit nihil earum explicabo.
            <br />
            <br />
            consequuntur suscipit. Sequi culpa quia magnam blanditiis pariatur
            ducimus ratione fugit nihil earum explicabo.
          </Text>

          <Button
            className="bg-pastel-blue-black rounded-full px-10 w-fit !h-12 text-[18px] mt-10 self-center"
            rightIcon={<SearchIcon size={28} className="" />}
          >
            Explore Now
          </Button>
        </Stack>
      </Grid.Col>
      <Grid.Col span={5} className="bg-pastel-yellow-50">
        <StackedPersonalityTypeImage
          imgSrcList={[studying, stayHome, readingBook, advertising]}
        />
      </Grid.Col>
    </Grid>
  );
};
export default PersonalityTypeJumbotron;
