// React, NextJS imports
import React from 'react';
import { Box, Text, Front, Tag, Separator, Table } from '../../blocks';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import moment from 'moment';
import { centerMaskString, rightMaskString, capitalizeStr } from '../../utils/helpers'
import { TagVariant } from '../../blocks/tag';

export default function LiveTransactions() {
  const router = useRouter()
  const { data, error, isLoading, isError } = useLiveTransactions({ lastTs: null });

  const columns = [
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (status: string) => <Tag label={capitalizeStr(status)} variant={status.toLowerCase() as TagVariant}></Tag>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '10%'
    },
    {
      title: 'Tx HASH',
      dataIndex: 'txHash',
      render: (txHash: string) => <Text variant='bs-regular' color="text-primary" onClick={() => router.push(`/transactions/${txHash}`)}>{rightMaskString(txHash)}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '25%'
    },
    {
      title: 'FROM',
      dataIndex: 'from',
      render: (from: string) => <Text variant='bs-regular' color="text-primary">{centerMaskString(from)}</Text>,
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
          display="flex"
          flexDirection="column"
        >
          <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-primary">{centerMaskString(reci[0])}</Text>
          { reci.length > 1 && <Text variant='bs-regular' color="text-tertiary">{`+ ${reci.length - 1} more`}</Text>}
        </Box>
      )},
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '30%'
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (ts: number) => <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-tertiary">{moment(ts * 1000).fromNow()}</Text>,
      cellAlignment: 'flex-end',
      headerAlignment: 'flex-end',
      width: '10%'
    },
  ];

  const dataSource = data?.transactions.map((dt) => ({
    id: dt.txHash,
    status: dt.status,
    txHash: dt.txHash,
    from: dt.from,
    recipients: dt.recipients,
    ts: dt.ts,
  })) || [];

  return (
    <Box
      css={'flex: 0 0 50%'}
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
        <Text variant='h5-semibold' color="text-primary">Live Transactions</Text>
        <Table columns={columns} dataSource={dataSource} />
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
