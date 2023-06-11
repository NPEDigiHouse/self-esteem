import { Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { TestResult } from "../utils/const/types";

export interface ISelfEsteemAspectResult {
  type: string;
  result: TestResult;
  percentage: number;
  resultLow: String;
  resultMedium: String;
  resultHigh: String;
}

const SelfEsteemAspectResult: React.FC<ISelfEsteemAspectResult> = ({
  result,
  percentage,
  resultHigh,
  resultLow,
  resultMedium,
  type
}) => {
  return (
    <Grid className="w-[98%] sm:w-[80%] self-center flex-nowrap mt-4">
      <Grid.Col span={4} md={3}>
        <Stack className="gap-0">
          <Text className="text-primary-text-500 font-roboto-bold text-lg sm:text-xl self-start">
            {type}: {result}
          </Text>
          <Text className="text-secondary-text-500 text-lg self-start">
            Persentase: {percentage?.toFixed(2)} %
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={8} md={9}>
        <Stack className="gap-0">
          <Text
            className={`text-primary-text-500 tracking-1 text-justify text-lg sm:text-[18px]`}
          >
            {result === "Rendah" ? (
              <>{resultLow}</>
            ) : result === "Sedang" ? (
              <>{resultMedium}</>
            ) : (
              <>{resultHigh}</>
            )}
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
export default SelfEsteemAspectResult;
