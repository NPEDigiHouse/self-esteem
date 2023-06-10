import {
  Grid,
  Group,
  Image,
  Stack,
  Text
} from "@mantine/core";
import React from "react";
import uinLogo from "../../assets/images/uin-logo.png";
import VerticalDivider from "../../components/VerticalDivider.component";

export interface IPersonalityTypeJumbotron {}

const PersonalityTypeJumbotron: React.FC<IPersonalityTypeJumbotron> = ({}) => {
  return (
    <Stack>
      <div className="w-[72px] ml-10 mt-4 hidden md:block">
        <Image src={uinLogo} className="" />
      </div>
      <Grid className="mt-36 md:mt-16 w-[90%] md:w-[80%] self-center bg-white">
        <Grid.Col span={3} className="">
          <Stack className=" gap-2 cursor-default">
            <Stack className="gap-0">
              <div className="flex text-center w-12 h-12 md:w-14 md:h-14 rounded-full self-center items-center bg-primaryGreen">
                <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                  1
                </div>
              </div>
              <Text className="text-[18px] md:text-xl text-primary-text-500 font-semibold text-center">
                Tingkat Rendah
              </Text>
            </Stack>
            <div className="self-center">
              <VerticalDivider />
            </div>
            <Stack className="gap-0">
              <div className="flex text-center w-12 h-12 md:w-14 md:h-14 rounded-full self-center items-center bg-primaryBlue">
                <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                  2
                </div>
              </div>
              <Text className="text-[18px] md:text-xl text-primary-text-500 font-semibold text-center">
                Tingkat Sedang
              </Text>
            </Stack>
            <div className="self-center">
              <VerticalDivider />
            </div>
            <Stack className="gap-0">
              <div className="flex text-center w-12 h-12 md:w-14 md:h-14 rounded-full self-center items-center bg-primaryDarkBlue">
                <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                  3
                </div>
              </div>
              <Text className="text-[18px] md:text-xl text-primary-text-500 font-semibold text-center">
                Tingkat Tinggi
              </Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={9}>
          <Stack className="relative">
            <Group className="justify-between">
              <Text className="font-roboto-semibold text-[38px] md:text-[42px] lg:text-[48px] text-pastel-primary-text z-10">
                3 Tingkat Kecemasan
              </Text>

              {/* <SearchIcon
                size={84}
                color={"#deddf1"}
                // className="absolute z-0 right-0 -bottom-6 md:-top-4"
                className="md:hidden"
              /> */}
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
