import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout.layout';
import { Slider, Stack } from '@mantine/core';
import PersonalityTestJumbotron from './PersonalityTestJumbotron.section';
import PersonalityTestInformation from './PersonalityTestInformation.section';
import Question from '../../components/Questions.component';

export interface IPersonalityTest {}

const PersonalityTest: React.FC<IPersonalityTest> = ({ }) => {
  const [progressCount, setProgressCount] = useState<number>(10);
  return (
    <MainLayout>
      <Stack className=''>
        <div className='w-1/2 self-center py-1 px-2 bg-white rounded-full fixed bottom-6 z-[100]'>
          <Slider size={"xs"} radius={"xl"} value={progressCount} thumbSize={10} labelAlwaysOn label={(value) => `${value} %`} color="gray" />
        </div>
        <PersonalityTestJumbotron />
        <PersonalityTestInformation />
        <Stack className='mt-20 gap-20 mb-10'>
          <Question progressCount={progressCount} setProgressCount={setProgressCount} />
          <Question progressCount={progressCount} setProgressCount={setProgressCount} />
          <Question progressCount={progressCount} setProgressCount={setProgressCount} />
          <Question progressCount={progressCount} setProgressCount={setProgressCount} />
          <Question progressCount={progressCount} setProgressCount={setProgressCount} />
          <Question progressCount={progressCount} setProgressCount={setProgressCount} />
        </Stack>
      </Stack>
    </MainLayout>
  )
}
export default PersonalityTest;