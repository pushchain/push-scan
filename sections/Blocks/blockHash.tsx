import React from 'react';
import { Box, Text } from '../../blocks';
import Advanced from '../../components/Reusables/Advanced';
import ConsensusInfo from '../../components/Blocks/ConsensusInfo';
import BlockDetails from '../../components/Blocks/Details'
import BlockTxDetails from '../../components/Blocks/BlockTxDetails'
import { useLiveBlockByHash, BlockDetailsProps } from '../../hooks/useLiveBlockByHash';

const Details = (props: BlockDetailsProps) => {
  
  const { data, error, isLoading, isError } = useLiveBlockByHash({ blockHash: props.blockHash });    

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap="spacing-sm"
    >
      <Text variant="h3-semibold" color='text-primary'>Block Details</Text>
      <BlockDetails
        data={data?.blockDetails}
        isLoading={isLoading}
      />
      <BlockTxDetails 
        data={data?.blockDetails}
        isLoading={isLoading}
      />
      <Advanced />
      <ConsensusInfo
        data={data?.blockDetails}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default Details;