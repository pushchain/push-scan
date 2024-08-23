import React from 'react';
import { Box, Text, Front, Separator } from '../../blocks';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLiveBlocks } from '../../hooks/useBlocks';
import moment from 'moment';
import { getValidatorNode } from '../../utils/helpers'
import { centerMaskString, rightMaskString } from '../../utils/helpers'

export default function LiveBlocks() {
  const router = useRouter()
  const { data, error, isLoading, isError } = useLiveBlocks();    
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
        <Text variant='h5-semibold' color="text-primary">Live Blocks</Text>
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
            gap="spacing-xs"
          >
            <Text variant='os-bold' color='text-tertiary'>BLOCK HASH</Text>
            <Text variant='os-bold' color='text-tertiary'>VALIDATOR</Text>
            <Text variant='os-bold' color='text-tertiary'>TX</Text>
            <Text variant='os-bold' color='text-tertiary'>AGE</Text>
          </Box>
          {data?.blocks?.map((dt) => 
            <Box
              display="flex"
              flexDirection="column"
              gap="spacing-xs"
              key={dt.blockHash}
            >
              <Box
                display="flex"
                flexDirection="row"
                padding="spacing-xs spacing-none"
                justifyContent="space-between"
                alignItems="center"
                gap="spacing-xs"
                onClick={() => router.push(`/blocks/${dt.blockHash}`)}
              >
                <Text variant='bs-regular' color="text-primary">{rightMaskString(dt.blockHash)}</Text>
                <Text variant='bs-regular' color="text-primary">{centerMaskString(getValidatorNode(dt.blockDataAsJson?.signersList))}</Text>
                <Text variant='bs-regular' color="text-primary">{dt.totalNumberOfTxns}</Text>
                <Text variant='bs-regular' color="text-tertiary">{moment(dt.ts * 1000).fromNow()}</Text>
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
        <Link href='/blocks'>
          <Text variant='bes-semibold' color="text-brand-medium">View All Blocks</Text>
        </Link>
        <Front />
      </Box>
    </Box>
  )
}
