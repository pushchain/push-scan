import React from 'react';
import { Box, Text, Tag, Table, Ethereum, Polygon, BNB } from '../../blocks';
import { Tick, EtheriumMonotone, BnbMonotone, PolygonMonotone, PushMonotone } from '../../blocks/icons'

import { fromNow, convertCaipToObject, capitalizeStr, centerMaskString, rightMaskString} from '../../utils/helpers'
import { useRouter } from 'next/router'
import moment from 'moment';
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
}

const ListView = (props: IProps) => {
  const router = useRouter()

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  let data = props.data;

  function getChainIcon(address) {
    try {
      const { result } = convertCaipToObject(address);
      if (!result.chainId) {
        return <PushMonotone />
      }

      switch(Number(result.chainId)) {
        case 1:
          return <EtheriumMonotone height={14} width={14} color="icon-tertiary" />
        case 137:
          return <PolygonMonotone height={14} width={14} color="icon-tertiary"/>
        case 56:
          return <BnbMonotone height={14} width={14} color="icon-tertiary"/>
        default: 
          return <EtheriumMonotone height={14} width={14}/>
      }
    } catch (err) {
      return <PushMonotone />
    }
  }

  const columns = [
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (status: string) => <Tag icon={<Tick />} label={capitalizeStr(status)} variant={status.toLowerCase() as TagVariant}></Tag>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '10%'
    },
    {
      title: 'TX HASH',
      dataIndex: 'txHash',
      render: (txHash: string) => <TxHashLink txHash={txHash} />,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '15%'
    },
    {
      title: 'BLOCK HASH',
      dataIndex: 'blockHash',
      render: (blockHash: string) => <BlockHashLink blockHash={blockHash} masking={true} />,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '15%'
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
          <Address address={reci[0]} />
          { reci.length > 1 && <Text variant='bs-regular' color="text-tertiary">{`+ ${reci.length - 1} more`}</Text>}
        </Box>
      )},
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '20%'
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      render: (category: string) => <Text variant='bs-regular' color="text-primary">{category}</Text>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '14%'
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (ts: number) => <Text display={{ ml: 'none', dp: 'block' }} variant='bs-regular' color="text-tertiary">{fromNow(ts * 1000)}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '6%'
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
    <Table columns={columns} dataSource={dataSource} backgroundColor={isDarkMode ? 'surface-secondary' : 'surface-primary'} />
  );
};

export default ListView;