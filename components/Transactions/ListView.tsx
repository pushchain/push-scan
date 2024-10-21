import React from 'react';
import { Box, Text, Tag, Table } from '../../blocks';
import { Tick } from '../../blocks/icons'
import { fromNow, capitalizeStr} from '../../utils/helpers'
import { useRouter } from 'next/router'
import { TagVariant } from '../../blocks/tag';
import { Transaction } from '../../types/transaction';
import { useTheme } from 'styled-components';
import Address from '../Reusables/AddressComponent'
import TxHashLink from '../Reusables/TxHashLink'
import BlockHashLink from '../Reusables/BlockHashLink'

interface dataProps {
  transactions: Transaction[],
  totalPages: number,
  lastTs: number
}
interface IProps {
  data?: dataProps
  isLoading?: boolean
}

const ListView = (props: IProps) => {
  const router = useRouter()

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  let data = props.data;

  const columns = [
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (status: string) => <Tag icon={<Tick />} label={capitalizeStr(status)} variant={status.toLowerCase() as TagVariant}></Tag>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '110px'
    },
    {
      title: 'TX HASH',
      dataIndex: 'txHash',
      render: (txHash: string) => <TxHashLink txHash={txHash}/>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '165px'
    },
    {
      title: 'BLOCK HASH',
      dataIndex: 'blockHash',
      render: (blockHash: string) => <BlockHashLink blockHash={blockHash} masking={true}/>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '165px'
    },
    {
      title: 'FROM',
      dataIndex: 'from',
      render: (params) => { 
        const from = JSON.parse(params);
        return <Address address={from.from} allowCopy/>
      },
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '220px'
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
          <Address address={reci[0]} allowCopy/>
          { reci.length > 1 && <Text variant='bs-regular' color="text-tertiary">{`+ ${reci.length - 1} more`}</Text>}
        </Box>
      )},
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '240px'
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      render: (category: string) => <Text variant='bs-regular' color="text-primary">{category}</Text>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '125px'
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
    blockHash: dt.blockHash,
    category: dt.category,
    from: JSON.stringify({ from: dt.from, source: dt.source }),
    recipients: dt.recipients,
    ts: dt.ts,
  })) || [];


  return (
    <Box height={'860px'}>
      <Table loading={props.isLoading} columns={columns} dataSource={dataSource} backgroundColor={isDarkMode ? 'surface-secondary' : 'surface-primary'} />
    </Box>
  );
};

export default ListView;