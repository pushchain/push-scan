// React, NextJS imports
import React from 'react';
// External Library imports
import { useMediaQuery } from '@mui/material';
import { Box, Text, Add, CaretDown, Button } from '../../blocks';
import Advanced from '../../components/Reusables/Advanced';
import ConsensusInfo from '../../components/Reusables/ConsensusInfo';
import TXDetails from '../../components/Reusables/TxDetails'
import TxTravels from '../../components/Reusables/TxTravels'

interface BlocksDetailsProps {
    address: string | string[] | undefined;
}

const Details = (props: BlocksDetailsProps) => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap="spacing-sm"
    >
      <Text variant="h3-semibold" color='text-primary'>Block Details</Text>
      <TXDetails />
      <TxTravels />
      <Advanced />
      <ConsensusInfo />
    </Box>
  );
};

export default Details;