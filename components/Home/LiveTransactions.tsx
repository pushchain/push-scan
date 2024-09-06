// React, NextJS imports
import React from 'react';
import { Box, Text, Front, Tag, Spinner, Table, Ethereum, Polygon, BNB } from '../../blocks';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import moment from 'moment';
import { centerMaskString, rightMaskString, capitalizeStr } from '../../utils/helpers'
import { TagVariant } from '../../blocks/tag';
import { useTheme } from 'styled-components';

export default function LiveTransactions() {
  const router = useRouter()
  const { data, isLoading } = useLiveTransactions({ page: 1 });

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  function getChainIcon(source) {
    switch(source) {
      case 'ETH_MAINNET':
        return <Ethereum height={14} width={14}/>
      case 'POLYGON_MAINNET':
        return <Polygon height={14} width={14}/>
      case 'BSC_MAINNET':
        return <BNB height={14} width={14}/>
      default: 
        return <Ethereum height={14} width={14}/>
    }
  }

  const columns = [
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (status: string) => <Tag label={capitalizeStr(status)} variant={status.toLowerCase() as TagVariant}></Tag>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '15%'
    },
    {
      title: 'Tx HASH',
      dataIndex: 'txHash',
      render: (txHash: string) => <Text variant='bs-regular' color="text-primary" onClick={() => router.push(`/transactions/${txHash}`)}>{rightMaskString(txHash)}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '20%'
    },
    {
      title: 'FROM',
      dataIndex: 'from',
      render: (params) => { 
        const from = JSON.parse(params)
        return (
          <Box display="flex" flexDirection="row" gap="spacing-xxs" alignItems="center">
            { getChainIcon(from.source) }
            <Text variant='bs-regular' color="text-primary">{centerMaskString(from.from)}</Text>
          </Box>
        )
      },
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '25%'
    },
    {
      title: 'TO',
      dataIndex: 'recipients',
      render: (recipients: string) => {
        const reci = recipients.split(',')
        return (
          <Box
            display={{ ml: 'none', dp: 'block' }}
            flexDirection="column"
          >
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box display="flex" flexDirection="row" gap="spacing-xxs" alignItems="center">
                { getChainIcon('ETH_MAINNET') }
                <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-primary">{centerMaskString(reci[0])}</Text>
              </Box>
              { reci.length > 1 && <Text variant='bs-regular' color="text-tertiary">{`+ ${reci.length - 1} more`}</Text>}
            </Box>
          </Box>
      )},
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '25%'
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (ts: number) => <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-tertiary">{moment(ts * 1000).fromNow()}</Text>,
      cellAlignment: 'flex-end',
      headerAlignment: 'flex-end',
      width: '15%'
    },
  ];

  const dataSource = data?.transactions.map((dt) => ({
    id: dt.txnHash,
    status: dt.status,
    txHash: dt.txnHash,
    from: JSON.stringify({ from: dt.from, source: dt.source }),
    recipients: dt.recipients,
    ts: dt.ts,
  })) || [];

  return (
    <Box
      css={'flex: 0 0 55%'}
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
        <Text variant='h5-semibold' color="text-primary">Live Transactions</Text>
        <Table loading={isLoading} columns={columns} dataSource={dataSource} backgroundColor={isDarkMode ? 'surface-secondary' : 'surface-primary'} />
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
          <Front autoSize/>
        </Box>
    </Box>
  )
}
