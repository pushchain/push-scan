import React from 'react';
import { Divider } from '@mui/material';
import { Box, Text } from '../../blocks';
import { useRouter } from 'next/router'
import { getValidatorNode } from '../../utils/helpers'
import moment from 'moment';

const BlockView = (props) => {
  const router = useRouter()

  return (
    <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xs"
        alignSelf="stretch"
    >
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            onClick={() => router.push(`/blocks/${props.block.blockHash}`)}
        >
            <Text variant="bs-regular" color='text-primary'>{props.block.blockHash}</Text>
            <Text variant="bs-regular" color='text-primary'>{getValidatorNode(props.block.blockDataAsJson?.signersList)}</Text>
            <Text display={{ ml: 'none', dp: 'block' }} variant="bs-regular" color='text-primary'>{props.block.totalNumberOfTxns}</Text>
            <Text display={{ ml: 'none', dp: 'block' }} variant="bs-regular" color='text-primary'>{props.block.blockSize}</Text>
            <Text display={{ ml: 'none', dp: 'block' }} variant="bs-regular" color='text-tertiary'>{moment(props.block.ts * 1000).fromNow()}</Text>
        </Box>
        <Divider color="#313338" flexItem orientation='horizontal' />
    </Box>
  );
};

export default BlockView;