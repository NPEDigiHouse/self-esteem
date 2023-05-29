import {
  Button,
  Grid,
  Stack,
  Text,
  Image,
  Stepper,
  useMantineTheme,
  rem,
  Group
} from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";
import {
  DescriptionIcon,
  InsightIcon,
  QuotesIconOutline,
  SearchIcon
} from "../../assets/icons/Fluent";
import StackedPersonalityTypeImage from "../../components/StackedPersonalityTypeImage.component";
import advertising from "../../assets/images/advertising.png";
import readingBook from "../../assets/images/reading-book.png";
import stayHome from "../../assets/images/stay-home.png";
import studying from "../../assets/images/studying.png";
import tkIcon from "../../assets/images/tk-icon.png";

export interface IPersonalityTypeJumbotron {}

const PersonalityTypeJumbotron: React.FC<IPersonalityTypeJumbotron> = ({}) => {
  const theme = useMantineTheme();
  return (
    <Stack>
      <div className="w-[120px] ml-10 mt-6 ">
        <Image src={tkIcon} className="" />
      </div>
      <Grid className="mt-16 w-[80%] self-center bg-white">
        <Grid.Col span={3} className="">
          <Stack className=" gap-2 cursor-default">
            <Stack className="gap-0">
              <div className="flex text-center w-14 h-14 rounded-full self-center items-center bg-primaryGreen">
                <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                  1
                </div>
              </div>
              <Text className="text-xl text-primary-text-500 font-semibold text-center">
                Tingkat Rendah
              </Text>
            </Stack>
            <div className="self-center">
              <VerticalDivider />
            </div>
            <Stack className="gap-0">
              <div className="flex text-center w-14 h-14 rounded-full self-center items-center bg-primaryBlue">
                <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                  2
                </div>
              </div>
              <Text className="text-xl text-primary-text-500 font-semibold text-center">
                Tingkat Sedang
              </Text>
            </Stack>
            <div className="self-center">
              <VerticalDivider />
            </div>
            <Stack className="gap-0">
              <div className="flex text-center w-14 h-14 rounded-full self-center items-center bg-primaryDarkBlue">
                <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                  3
                </div>
              </div>
              <Text className="text-xl text-primary-text-500 font-semibold text-center">
                Tingkat Tinggi
              </Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={9}>
          <Stack className="relative">
            <Group className="justify-between">
              <Text className="font-poppins-semibold text-[48px] text-pastel-primary-text z-10">
                3 Tingkat Kecemasan
              </Text>

              <SearchIcon
                size={84}
                color={"#deddf1"}
                // className="absolute z-0 right-0 -bottom-6 md:-top-4"
              />
            </Group>

            <VerticalDivider h="sm" />

            <Text className="text-[18px] self-center tracking-4 text-primary-text-500 text-justify">
              Tingkat kecemasan bisa diklasifikasikan menjadi setidaknya 3
              kelompok: rendah, sedang dan tinggi. Tingkat kecemasan bisa
              memberikan gambaran yang jelas tentang sejauh mana kecemasan
              mempengaruhi kesejahteraan seseorang
              <br />
              <br />
              Klasifikasi tingkat kecemasan juga penting membantu menentukan
              strategi pengelolaan yang sesuai dengan tingkat kecemasan yang
              dialami, dan memberikan pemahaman yang lebih komprehensif tentang
              pengalaman kecemasan.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default PersonalityTypeJumbotron;

{
  /* <Stepper
            active={-1}
            breakpoint="sm"
            iconPosition="right"
            size="xl"
            styles={{
              steps: {
                display: "flex",
                alignItems: "center"
              },
              step: {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 0,
                paddingBottom: 20,
                flexGrow: 1
              },
              stepBody: {
                marginRight: 0,
                marginTop: 24,
                top: 30,
                position: "absolute",
              },
              separator: {
                margin: 0,
                marginTop: "-7%",
                marginBottom: "-7%",
                background: `#FF0000 !important`,
                height: rem(10),
              },
              stepIcon: {
                // borderColor: theme.colors["secondary-text"][5],
                // borderWidth: "3px",
                paddingBottom: "4px",
                backgroundColor: theme.colors["secondary"][5],
                color: theme.colors["primary-text"][5]
              }
            }}
            orientation="vertical"
          >
            <Stepper.Step
              label={<Text className="!bg-white text-primary-text-500">Tingkat Tinggi</Text>}
              className="w-full h-40"
            />
            <Stepper.Step
              label={<Text className="!bg-white text-primary-text-500">Tingkat Sedang</Text>}
              className="w-full h-40"
            />
            <Stepper.Step
              label={<Text className="!bg-white text-primary-text-500">Tingkat Rendah</Text>}
              className="w-full h-40"
            />
          </Stepper> */
}
{
  /* <StackedPersonalityTypeImage
            imgSrcList={[studying, stayHome, readingBook, advertising]}
          /> */
}
