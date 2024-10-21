// React, NextJS imports
import React from 'react';
import { Box, Text, Front, Tag, Table } from '../../blocks';
import { Tick } from '../../blocks/icons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import moment from 'moment';
import { fromNow, capitalizeStr } from '../../utils/helpers'
import { TagVariant } from '../../blocks/tag';
import { useTheme } from 'styled-components';
import Address from '../Reusables/AddressComponent'
import TxHashLink from '../Reusables/TxHashLink'

export default function LiveTransactions() {
  const router = useRouter()
  const { data, isLoading } = useLiveTransactions({ page: 1, perPageItems: 6 });

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  const columns = [
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (status: string) => <Tag icon={<Tick />} label={capitalizeStr(status)} variant={status.toLowerCase() as TagVariant}></Tag>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '100px'
    },
    {
      title: 'TX HASH',
      dataIndex: 'txHash',
      render: (txHash: string) => <TxHashLink txHash={txHash} />,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '135px'
    },
    {
      title: 'FROM',
      dataIndex: 'from',
      render: (params) => { 
        const from = JSON.parse(params);
        return <Address address={from.from}/>
      },
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '175px'
    },
    {
      title: 'TO',
      dataIndex: 'recipients',
      render: (recipients: string) => {
        const reci = recipients.split(',')
        return (
          <Box
            flexDirection="column"
          >
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Address address={reci[0]} />
              { reci.length > 1 && <Text variant='bs-regular' color="text-tertiary">{`+ ${reci.length - 1} more`}</Text>}
            </Box>
          </Box>
      )},
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '175px'
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (ts: number) => <Text variant='bs-regular' color="text-tertiary">{fromNow(ts)}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '75px'
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
      css={'flex: 0 0 60%'}
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
        <Text variant='h5-semibold' color="text-primary">Live Transactions</Text>
        <Box height={"375px"}><Table loading={isLoading} columns={columns} dataSource={dataSource} backgroundColor={isDarkMode ? 'surface-secondary' : 'surface-primary'} /></Box>
        <Link href='/transactions'>
          <Box
            display="flex"
            flexDirection="row"
            gap="spacing-xxxs"
            color="text-brand-medium"
            justifyContent={{ initial: "flex-end", ml: "flex-start" }}
          >
            <Text variant='bes-semibold' color="text-brand-medium">View All Transactions</Text>
            <Front />
          </Box>
        </Link>
    </Box>
  )
}
