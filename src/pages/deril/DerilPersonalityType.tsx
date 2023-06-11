import {
  Image,
  Stack,
  Text,
  Group,
  Grid,
  BackgroundImage,
} from "@mantine/core";
import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout.layout";
import uinLogo from "../../assets/images/uin-logo.png";
import { AnxietyPersonIcon } from "../../assets/icons/Fluent";
import VerticalDivider from "../../components/VerticalDivider.component";
import PersonalityTypeList from "../personality-type/PersonalityTypeList.section";

export interface IDerilPersonalityType {}

const DerilPersonalityType: React.FC<IDerilPersonalityType> = ({}) => {
  return (
    <MainLayout>
      <Stack className="justify-center w-[100%] self-center gap-10 md:gap-10 flex-nowrap">
        <div className="w-[72px] ml-10 mt-4 hidden md:block">
          <Image src={uinLogo} className="" />
        </div>

        <div>
          <a href=" "></a>
          <h1 className="text-center font-poppins-bold text-[36px] md:text-[46px] text-[#9C42B8] pb-7 ">
            Self Esteem(Kepercayaan Diri)
          </h1>
          <Grid className="justify-center ">
            <div className="p-4 rounded-lg self-center  bg-secondary-500 overflow-hidden max-w-[440px] ">
              <img src="/src/assets/images/self-esteem.jpg" alt="" />
            </div>

            <Text className="text-[18px] pt-7 md:text-xl text-primary-text-500 tracking-4 text-center text-justify px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              incidunt soluta nobis at optio ipsam facere deleniti culpa
              voluptatibus, similique quisquam ad quia est ducimus inventore
              eaque quo enim reiciendis minima rem atque et ipsum. Suscipit
              magnam recusandae quaerat totam asperiores illum amet maiores,
              inventore quia nulla ab praesentium vel!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto dignissimos excepturi laborum quo quod illum, eaque,
              itaque maxime veniam harum ut ullam molestias natus cupiditate aut
              officia voluptate facere. Minus repellendus impedit, facilis fugit
              perspiciatis eveniet enim sint eaque amet ducimus, beatae, eum
              voluptatibus. Quas numquam necessitatibus mollitia placeat ex.
            </Text>
          </Grid>

          <Stack>
            <Grid className="mt-36 md:mt-16 w-[90%] md:w-[80%] self-center bg-white">
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
              </Grid.Col>
              <Grid.Col span={9}>
                <Stack className="relative">
                  <Group className="justify-between">
                    <Text className="font-roboto-bold text-[32px] md:text-[38px] text-[#603991] mt-2 text-center self-center w-fit">
                      Tingkat Self Esteem
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda doloribus quae repellendus eaque architecto, enim
                    odit accusamus temporibus? Officiis ea cumque dolorum
                    incidunt dolore velit nam odio eum doloribus natus.
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus quibusdam magni, architecto exercitationem dolorum
                    non assumenda perferendis perspiciatis impedit recusandae ut
                    consequuntur maiores laudantium rem facilis rerum quas
                    repudiandae aperiam?
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus quibusdam magni, architecto exercitationem dolorum
                    non assumenda perferendis perspiciatis impedit recusandae ut
                    consequuntur maiores laudantium rem facilis rerum quas
                    repudiandae aperiam?
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </div>
        <Group className="justify-center self-center w-full md:w-[60%] self-center gap-12 mt-20  mb-20">
          <Stack>
            <div className="rounded-full">
              <img
                src="/src/assets/images/anxiety.png"
                className="w-48 rounded-full"
              />
            </div>
          </Stack>
          <Stack className="relative">
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
          </Stack>
        </Group>
      </Stack>
    </MainLayout>
  );
};
export default DerilPersonalityType;
