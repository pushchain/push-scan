import React, { useState } from 'react';
import { Box, Text, Copy, Tooltip } from '../../blocks';
import ListView from '../../components/Transactions/ListView';
import { Transaction } from '../../types/transaction';
import { centerMaskString } from '../../utils/helpers';

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

const Transactions = (props) => {
  const [tooltipText, setToolTipText] = useState('Copy Address');

  const copyAddress = () => {
    if (props.address) {
      navigator.clipboard.writeText(props.address);
      setToolTipText('Copied');
    }
    setTimeout(() => {
      setToolTipText('Copy Address');
    }, 1000);
  };


  return (

    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    >

      { props.address && (<Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        gap="spacing-md"
      >
        <Box
          display="flex"
          flexDirection="row"
          gap="spacing-xxs"
          alignItems="center"
        >
          <Text variant="h3-semibold" color='text-primary'>Address {props.address}</Text>
          <Tooltip title={tooltipText}>
            <Box cursor="pointer">
                <Copy
                  onClick={copyAddress}
                  autoSize
                  size={24}
                  color="icon-tertiary"
                />
            </Box>
          </Tooltip>
        </Box>

        <Text variant="h3-semibold" color='text-primary'>Transactions for {centerMaskString(props.address)}</Text>
      </Box>)}

      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      >
        {!props.search && <Text variant="h3-semibold" color='text-primary'>Transactions</Text>}
        <ListView data={props.data} address={props.address} search={props.search} />
      </Box>
    </Box>
    
  );
};

export default Transactions;