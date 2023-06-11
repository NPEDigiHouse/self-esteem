import { Grid, Group, Image, MediaQuery, Stack, Text } from "@mantine/core";
import React from "react";
import uinLogo from "../../assets/images/uin-logo.png";
import VerticalDivider from "../../components/VerticalDivider.component";
import MainLayout from "../../layouts/MainLayout.layout";
import {
  SelfLoveLow,
  SelfLoveNormal,
  SelfLoveHigh
} from "../../assets/icons/Fluent";

export interface IDerilPersonalityType {}

const DerilPersonalityType: React.FC<IDerilPersonalityType> = ({}) => {
  return (
    <MainLayout>
      <Stack className="justify-center w-[100%] self-center gap-10 md:gap-10 flex-nowrap">
        <div>
          <h1 className="text-center font-roboto-bold text-[24px] sm:text-[32px] md:text-[42px] mt-10 sm:mt-20 text-[#9C42B8] pb-7 ">
            Self Esteem (Keberhargaan Diri)
          </h1>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Grid className="w-full self-center " gutter={"xl"}>
              <Grid.Col md={4} className="flex">
                <div className="flex self-center mx-auto w-[200px] md:w-[320px] overflow-hidden">
                  <SelfLoveLow size={200} className="mx-auto" />
                </div>
              </Grid.Col>
              <Grid.Col md={4} className="flex">
                <div className="flex self-center mx-auto w-[200px] md:w-[320px] overflow-hidden">
                  <SelfLoveNormal size={200} className="self-center mx-auto" />
                </div>
              </Grid.Col>
              <Grid.Col md={4} className="flex">
                <div className="flex self-center mx-auto w-[200px] md:w-[320px] overflow-hidden">
                  <SelfLoveHigh size={200} className="self-center mx-auto" />
                </div>
              </Grid.Col>
            </Grid>
          </MediaQuery>
          <Grid className="justify-center ">
            <Text className="text-[18px] pt-2 sm:pt-7 md:text-xl text-primary-text-500 tracking-4 text-justify px-8 sm:px-20 mt-4 sm:mt-10">
              Tingkatan dari self-esteem diklasifikasikan 3 kelompok: rendah,
              sedang dan tinggi. Tingkat self-esteem dapat memberikan gambaran
              yang jelas tentang bagaimana kepercayaan diri seseorang
              mempengaruhi kesejahteraannya.
            </Text>
          </Grid>

          <Stack>
            {/* <Grid className="mt-36 md:mt-16 w-[90%] md:w-[80%] self-center bg-white">
              <Grid.Col span={3} className="">
                <Stack className=" gap-2 cursor-default">
                  <Stack className="gap-0">
                    <div className="flex text-center w-12 h-12 md:w-14 md:h-14 rounded-full self-center items-center bg-[#B6076A]">
                      <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                        1
                      </div>
                    </div>
                    <Text className="text-[18px] md:text-xl text-primary-text-500 font-semibold text-center">
                      Kurang Percaya Diri
                    </Text>
                  </Stack>
                  <div className="self-center">
                    <VerticalDivider />
                  </div>
                  <Stack className="gap-0">
                    <div className="flex text-center w-12 h-12 md:w-14 md:h-14 rounded-full self-center items-center bg-[#DA216B]">
                      <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                        2
                      </div>
                    </div>
                    <Text className="text-[18px] md:text-xl text-primary-text-500 font-semibold text-center">
                      Percaya Diri
                    </Text>
                  </Stack>
                  <div className="self-center">
                    <VerticalDivider />
                  </div>
                  <Stack className="gap-0">
                    <div className="flex text-center w-12 h-12 md:w-14 md:h-14 rounded-full self-center items-center bg-[#F7B52F]">
                      <div className="self-center w-full text-xl text-white font-semibold pb-[2px]">
                        3
                      </div>
                    </div>
                    <Text className="text-[18px] md:text-xl text-primary-text-500 font-semibold text-center">
                      Sangat Percaya Diri
                    </Text>
                  </Stack>
                </Stack>
              </Grid.Col> */}
            {/* <Grid.Col span={9}> */}
            <Stack className="relative w-[90%] self-center mt-20">
              <Group className="justify-between">
                <Text className="font-roboto-bold text-[24px] md:text-[38px] text-primary-text-500 mt-2 text-center self-center w-fit">
                  Tingkat Self Esteem
                </Text>

                {/* <SearchIcon
                size={84}
                color={"#deddf1"}
                // className="absolute z-0 right-0 -bottom-6 md:-top-4"
                className="md:hidden"
              /> */}
              </Group>

              {/* <VerticalDivider h="sm" /> */}

              <Text className="text-lg sm:text-[18px] self-center tracking-4 text-primary-text-500 text-justify">
                Tingkat Tinggi (presentasi 66-100%): Dengan skor self-esteem
                anda yang tinggi. Dalam hal ini Anda digambarkan sebagai
                seseorang yang mampu menghadapi tugas dan orang lain dengan
                penuh pengharapan akan sukses dan diterima. Anda juga memiliki
                pandangan yang lebih realistis dan positif terhadap lingkungan
                sekitar dan juga terhadap diri sendiri
                <br />
                <br />
                Tingkat Sedang (presentasi 34-65%): Anda memiliki tingkat self
                esteem sedang. Dalam hal ini Anda digambarkan sebagai seseorang
                yang memiliki kepercayaan diri yang rendah. Hal ini ditandai
                dengan adanya ketergantungan pada pendapat orang lain dalam
                melakukan evaluasi pada diri Anda.
                <br />
                <br />
                Tingkat Rendah (presentasi 1-33%): Anda memiliki tingkat self
                esteem rendah. Dalam hal ini Anda digambarkan sebagai orang yang
                tidak percaya pada dunia, disamping tidak adanya kepercayaan dan
                penghargaan pada diri Anda.
              </Text>
            </Stack>
            {/* </Grid.Col>
            </Grid> */}
          </Stack>
        </div>
        {/* <Group className="justify-center self-center w-full md:w-[60%] self-center gap-12 mt-20  mb-20"> */}
        {/* <Stack>
            <div className="rounded-full">
              <img
                src="/src/assets/images/anxiety.png"
                className="w-48 rounded-full"
              />
            </div>
          </Stack> */}
        {/* <Stack className="relative">
            <Stack className="gap-0">
              <Text className="font-poppins-bold text-[22px] text-primary-text-500">
                Disclaimer
              </Text>
            </Stack>
            <VerticalDivider />
            <Text className="w-full md:w-[400px] text-primary-text-500 tracking-1 text-justify">
              <Text className="inline-block font-poppins-semibold">
                Kepercayaan Diri bla-bla-bla.
              </Text>{" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum unde enim soluta dolor placeat minima aliquid illo
              quidem assumenda suscipit..
            </Text>
          </Stack> */}
        {/* </Group> */}
      </Stack>
    </MainLayout>
  );
};
export default DerilPersonalityType;
