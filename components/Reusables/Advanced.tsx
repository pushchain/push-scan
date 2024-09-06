import React from 'react';
import { Box, Text, CaretDown, CaretUp } from '../../blocks';

interface IProps {
  showConsensusInfo: boolean
  toggleConsensusInfo: (value: boolean) => void
}

const Advanced = ({ showConsensusInfo, toggleConsensusInfo }: IProps) => {
  return (
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xxs"
        onClick={() => toggleConsensusInfo(!showConsensusInfo)}
      >
        <Text variant='bes-semibold' color='text-primary'>Advanced</Text>
        { showConsensusInfo ? <CaretDown /> : <CaretUp /> }
      </Box>
  );
};

export default Advanced;