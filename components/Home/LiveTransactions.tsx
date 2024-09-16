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
      width: '15%'
    },
    {
      title: 'TX HASH',
      dataIndex: 'txHash',
      render: (txHash: string) => <TxHashLink txHash={txHash} />,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '20%'
    },
    {
      title: 'FROM',
      dataIndex: 'from',
      render: (params) => { 
        const from = JSON.parse(params);
        return <Address address={from.from} />
      },
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
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
              <Address address={reci[0]} />
              { reci.length > 1 && <Text variant='bs-regular' color="text-tertiary">{`+ ${reci.length - 1} more`}</Text>}
            </Box>
          </Box>
      )},
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '25%'
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (ts: number) => <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-tertiary">{fromNow(ts * 1000)}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
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
      css={'flex: 0 0 60%'}
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
