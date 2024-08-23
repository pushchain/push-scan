// React, NextJS imports
import React from 'react';
import { Divider } from '@mui/material';
import { Box, Text, Front, Tag, Separator } from '../../blocks';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import moment from 'moment';
import { centerMaskString, rightMaskString } from '../../utils/helpers'

export default function LiveTransactions() {
  const router = useRouter()
  const { data, error, isLoading, isError } = useLiveTransactions({ lastTs: null });

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      >
        <Text variant='h5-semibold' color="text-primary">Live Transactions</Text>
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxxs"
        >
          <Box
            display="flex"
            flexDirection="row"
            padding="spacing-xs spacing-none"
            justifyContent="space-between"
            alignSelf="stretch"
            gap="spacing-xs"
          >
            <Text variant='os-bold' color='text-tertiary'>STATUS</Text>
            <Text variant='os-bold' color='text-tertiary'>Tx HASH</Text>
            <Text variant='os-bold' color='text-tertiary'>FROM</Text>
            <Text display={{ ml: 'none', dp: 'block' }} variant='os-bold' color='text-tertiary'>TO</Text>
            <Text display={{ ml: 'none', dp: 'block' }} variant='os-bold' color='text-tertiary'>AGE</Text>
          </Box>
          {data?.transactions.map((dt) => 
            <Box
              display="flex"
              flexDirection="column"
              gap="spacing-xs"
              key={dt.txHash}
            >
              <Box
                display="flex"
                flexDirection="row"
                padding="spacing-xs spacing-none"
                justifyContent="space-between"
                alignItems="center"
                gap="spacing-xs"
                onClick={() => router.push(`/transactions/${dt.txhash}`)}
              >
                <Tag label={dt.status} variant={dt.status.toLowerCase()}></Tag>
                <Text variant='bs-regular' color="text-primary">{rightMaskString(dt.txHash)}</Text>
                <Text variant='bs-regular' color="text-primary">{centerMaskString(dt.from)}</Text>
                <Box>
                  <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-primary">{centerMaskString(dt?.recipients[0])}</Text>
                  { dt?.recipients.length > 1 && ( <Text variant='bs-regular' color="text-tertiary">{ `+ ${dt?.recipients.length - 1} more`}</Text>) }
                  
                </Box>
                <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-tertiary">{moment(dt.ts * 1000).fromNow()}</Text>
              </Box>

              <Separator orientation="horizontal" />
            </Box>
          )}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xxxs"
        color="text-brand-medium"
        justifyContent={{initial: "flex-end", ml: "flex-start"}}
      >
        <Link href='/transactions'>
          <Text variant='bes-semibold' color="text-brand-medium">View All Transactions</Text>
        </Link>
        <Front />
      </Box>
    </Box>
  )
}
