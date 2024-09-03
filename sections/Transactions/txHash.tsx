import React from 'react';
import { Box, Text, Spinner } from '../../blocks';
import Advanced from '../../components/Reusables/Advanced';
import ConsensusInfo from '../../components/Transactions/ConsensusInfo';
import TXDetails from '../../components/Transactions/TxDetails'
import TxTravels from '../../components/Transactions/TxTravels'
import { useLiveTxByHash } from '../../hooks/useLiveTxByHash';
import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();
  const { txHash } = router.query;
  
  const { data, isLoading } = useLiveTxByHash({ txHash });    
  const showLoading = !txHash || isLoading

  if (showLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <Spinner size='extraLarge'/>
      </Box>
    )
  }

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