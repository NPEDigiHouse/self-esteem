import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import ExploreCard from "../../components/ExploreCard.component";
import personalityTest from "../../assets/images/self-esteem-test.jpg";
import personalityResult from "../../assets/images/self-esteem-result.jpg";

export interface IHomeExplore {}

const HomeExplore: React.FC<IHomeExplore> = ({}) => {
  return (
    <Stack className="mx-8 md:mx-12 mt-16 md:mt-32">
      <Text className="font-roboto-semibold text-[28px] md:text-[38px] text-primary-text-500 text-center mb-4">
        Jelajahi
      </Text>
      <Grid className="" gutter={80}>
        <Grid.Col md={6} sm={12} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={personalityTest}
            to="umkm"
            title="UMKM"
            description="UMKM (Usaha Mikro Kecil dan Menengah) adalah usaha produktif yang
            dimiliki perorangan maupun badan usaha yang telah memenuhi kriteria
            sebagai usaha mikro"
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={personalityResult}
            to="bagan-kelurahan"
            title="Bagan Kelurahan"
            description="Bagan Kelurahan Banyorang, yang mencakup mulai dari Ketua Lurah, Ketua RW, sampai ketua RT masing-masing RW"
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default HomeExplore;
