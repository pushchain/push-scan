import React from 'react';
import { Box, Text, Separator, Tag, InboxBellFilled, Ethereum } from '../../blocks';
import { useRouter } from 'next/router'
import moment from 'moment';
import { centerMaskString, rightMaskString } from '../../utils/helpers'

const TransactionRowView = (props) => {
  const router = useRouter()

  return (
    <Box
      width="-webkit-fill-available"
      display="flex"
      flexDirection="column"
      gap="spacing-xs"
      alignSelf="stretch"
  >
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      onClick={() => router.push(`/transactions/${props.txHash}`)}
    >
      <Tag label={props.status} variant={props.status.toLowerCase()}></Tag>

      <Text variant="bs-regular" color='text-primary'>{rightMaskString(props.txHash)}</Text>
      <Text variant="bs-regular" color='text-primary'>{rightMaskString(props.blockHash)}</Text>
      
      <Box
        display={{ ml: 'none', dp: 'flex' }}
        flexDirection="row"
        justifyContent="space-between"
        gap="spacing-xxs"
      >
        <Ethereum height={14} width={14} />
        <Text variant="bs-regular" color='text-primary'>{centerMaskString(props.from)}</Text>
      </Box>

      <Box
        display={{ ml: 'none', dp: 'flex' }}
        flexDirection="column"
        justifyContent="space-between"
        gap="spacing-xxs"
      >
        <Box
          display={{ ml: 'none', dp: 'flex' }}
          flexDirection="row"
          justifyContent="space-between"
          gap="spacing-xxs"
        >
          <InboxBellFilled />
          <Text variant="bs-regular" color='text-primary'>{centerMaskString(props.recipients[0])}</Text>
        </Box>
        { props.recipients.length > 1 && ( <Text variant='bs-regular' color="text-tertiary">{ `+ ${props.recipients.length - 1} more`}</Text>) }
      </Box>

      <Text display={{ ml: 'none', dp: 'block' }} variant="bs-regular" color='text-primary'>{props.category}</Text>
      <Text display={{ ml: 'none', dp: 'block' }} variant="bs-regular" color='text-tertiary'>{moment(props.ts * 1000).fromNow()}</Text>
    </Box>
    <Separator orientation="horizontal" />
  </Box>
  );
};

export default TransactionRowView;