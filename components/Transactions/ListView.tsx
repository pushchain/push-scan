import React, { useState } from 'react';
import { Box, Text, Tag, Table, Pagination, Ethereum, Polygon, BNB } from '../../blocks';
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import { PerPageItems } from '../../utils/constants'
import { capitalizeStr, centerMaskString } from '../../utils/helpers'
import { useRouter } from 'next/router'
import moment from 'moment';
import { TagVariant } from '../../blocks/tag';
import { Transaction } from '../../types/transaction';

interface dataProps {
  transactions: Transaction[],
  totalPages: number,
  lastTs: number
}
interface IProps {
  data?: dataProps,
  search?: true,
  address?: string
}

const ListView = (props) => {
  const router = useRouter()

  const [page, setPage] = useState(1);


  let data;

  if (props.search) {
    data = props.data;
  } else {
    const { data: liveData, error, isLoading, isError } = useLiveTransactions({ page });
    data = liveData;
  }

  function getChainIcon(source) {
    switch(source) {
      case 'ETH_MAINNET':
        return <Ethereum height={16} width={16}/>
      case 'POLYGON_MAINNET':
        return <Polygon height={16} width={16}/>
      case 'BSC_MAINNET':
        return <BNB height={16} width={16}/>
      default: 
        return <Ethereum height={16} width={16}/>
    }
  }

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
      title: 'TX HASH',
      dataIndex: 'txHash',
      render: (txHash: string) => <Text variant='bs-regular' color="text-primary" onClick={() => router.push(`/transactions/${txHash}`)}>{txHash}</Text>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '15%'
    },
    {
      title: 'BLOCK HASH',
      dataIndex: 'blockHash',
      render: (blockHash: string) => <Text variant='bs-regular' color="text-primary" onClick={() => router.push(`/transactions/${txHash}`)}>{blockHash}</Text>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '15%'
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
      width: '20%'
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
          <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-primary">{reci[0]}</Text>
          { reci.length > 1 && <Text variant='bs-regular' color="text-tertiary">{`+ ${reci.length - 1} more`}</Text>}
        </Box>
      )},
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '25%'
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      render: (category: string) => <Text variant='bs-regular' color="text-primary">{category}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '10%'
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (ts: number) => <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-tertiary">{moment(ts * 1000).fromNow()}</Text>,
      cellAlignment: 'flex-end',
      headerAlignment: 'flex-end',
      width: '5%'
    },
  ];

  const dataSource = data?.transactions.map((dt) => ({
    id: dt.txHash,
    status: dt.status,
    txHash: dt.txHash,
    blockHash: dt.blockHash,
    category: dt.category,
    from: JSON.stringify({ from: dt.from, source: dt.source }),
    recipients: dt.recipients,
    ts: dt.ts,
  })) || [];


  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-xs"
    >
      <Table columns={columns} dataSource={dataSource} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Pagination
          pageSize={PerPageItems}
          current={page}
          total={data?.totalPages * PerPageItems}
          onChange={(page) => setPage(page)}
        />
      </Box>
    </Box>
  );
};

export default ListView;