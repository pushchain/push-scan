import React, { useState } from 'react';
import { Box, Text, Tag, Table } from '../../blocks';
import Pagination from '../Pagination';
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import { PerPageItems } from '../../utils/constants'
import { capitalizeStr } from '../../utils/helpers'
import { useRouter } from 'next/router'
import moment from 'moment';
import { TagVariant } from '../../blocks/tag';

const ListView = () => {
  const router = useRouter()

  const [page, setPage] = useState(null);
  const { data, error, isLoading, isError } = useLiveTransactions({ lastTs: page });

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
      render: (from: string) => <Text variant='bs-regular' color="text-primary">{from}</Text>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
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
    from: dt.from,
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
      <Pagination
        itemsPerPage={PerPageItems}
        totalItems={data?.totalPages * PerPageItems}
        paginate={(page) => setPage(data?.lastTs)}
        currentPage={page}
      />
    </Box>
  );
};

export default ListView;