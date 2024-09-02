import React from 'react';
import { Box, Text } from '../../blocks';
import Advanced from '../../components/Reusables/Advanced';
import ConsensusInfo from '../../components/Transactions/ConsensusInfo';
import TXDetails from '../../components/Transactions/TxDetails'
import TxTravels from '../../components/Transactions/TxTravels'
import { useLiveTxByHash, TxDetailsProps } from '../../hooks/useLiveTxByHash';

const Details = (props: TxDetailsProps) => {

  const { data, error, isLoading, isError } = useLiveTxByHash({ txHash: props.txHash });    

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap={{initial: "spacing-sm", ml: "spacing-md"}}
    >
      <Text variant="h3-semibold" color='text-primary'>Transaction Details</Text>
      <TXDetails
        data={data?.transaction}
        isLoading={isLoading}
      />
      <TxTravels 
        data={data?.transaction}
        isLoading={isLoading}
      />
      <Advanced />
      <ConsensusInfo
        blockDetails={data?.blockDetails}
        transaction={data?.transaction}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default Details;