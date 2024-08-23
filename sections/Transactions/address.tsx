import React from 'react';
import { Box, Text } from '../../blocks';
import Advanced from '../../components/Reusables/Advanced';
import ConsensusInfo from '../../components/Reusables/ConsensusInfo';
import TXDetails from '../../components/Reusables/TxDetails'
import TxTravels from '../../components/Reusables/TxTravels'

interface TransactionDetailsProps {
    address: string | string[] | undefined;
}

const Details = (props: TransactionDetailsProps) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap={{initial: "spacing-sm", ml: "spacing-md"}}
    >
      <Text variant="h3-semibold" color='text-primary'>Transaction Details</Text>
      <TXDetails />
      <TxTravels />
      <Advanced />
      <ConsensusInfo />
    </Box>
  );
};

export default Details;