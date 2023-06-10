import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import ExploreCard from "../../components/ExploreCard.component";
import personalityTest from "../../assets/images/self-esteem-test.jpg";
import personalityResult from "../../assets/images/self-esteem-result.jpg";
import { ROUTES } from "../../utils/const/routes";

export interface IHomeExplore {}

const HomeExplore: React.FC<IHomeExplore> = ({}) => {
  return (
    <Stack className="mx-8 md:mx-12 mt-16 md:mt-32">
      <Text className="font-roboto-bold text-[28px] md:text-[38px] text-primary-text-500 text-center mb-4">
        Jelajahi
      </Text>
      <Grid className="" gutter={80}>
        <Grid.Col md={6} sm={12} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={personalityTest}
            to={ROUTES.anxietyTest}
            title="Tes Self-Esteem"
            description="Lakukan tes self-esteem, di mana anda akan diarahkan untuk menjawab 42 pertanyaan selama 5-10 menit. Jawaban tes self-esteem akan mempengaruhi hasil akhir."
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12} className="hover:scale-[1.01] transition-all">
          <ExploreCard
            src={personalityResult}
            to={ROUTES.anxietyClass}
            title="Tingkat Self-Esteem"
            description="Tingkatan dari self-esteem diklasifikasikan 3 kelompok: rendah, sedang dan tinggi. Tingkat self-esteem dapat memberikan gambaran yang jelas tentang bagaimana kepercayaan diri seseorang mempengaruhi kesejahteraannya."
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default HomeExplore;
