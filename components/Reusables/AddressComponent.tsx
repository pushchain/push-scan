import React, { useState } from 'react';
import { Box, Text, Tooltip } from '../../blocks';
import {
  PushMonotone,
  TickCircleFilled,
  Copy,
} from '../../blocks/icons';
import { convertCaipToObject, centerMaskString } from '../../utils/helpers';
import Link from 'next/link';
import styled from 'styled-components';
import { CHAIN_LOGO } from '../../common';

const Address = ({ address, wrap = false, masking = true, allowCopy=false }) => {
  function getChainIcon(chainId) {
    try {
      if (!chainId) {
        return <PushMonotone />;
      }

      const IconComponent = CHAIN_LOGO[chainId];
      return <IconComponent height={14} width={14} color="icon-tertiary" />;
    } catch (err) {
      return <PushMonotone />;
    }
  }

  const { result } = convertCaipToObject(address);

  const maskedAddress = masking
    ? centerMaskString(result.address)
    : result.address;

    const [tooltipText, setToolTipText] = useState('Copy');

    const copyData = () => {
      navigator.clipboard.writeText(address);
      setToolTipText('Copied');
  
      setTimeout(() => {
        setToolTipText('Copy');
      }, 1000);
    };

  return (
    <AddressContainer>
      {result.chainId && getChainIcon(result.chainId)}
      <AddressLink href={`/users/${address}`}>
        <AddressText wrap={wrap} variant="bs-regular">
          {maskedAddress}
        </AddressText>
      </AddressLink>
      {allowCopy && (
        <CopyIconButton onClick={copyData}>
          <Tooltip title={tooltipText}>
            {tooltipText === 'Copied' ? (
              <TickCircleFilled
                autoSize
                size={16}
                color="icon-state-success-bold"
              />
            ) : (
              <Copy autoSize size={16} color="icon-tertiary" />
            )}
          </Tooltip>
        </CopyIconButton>
      )}
    </AddressContainer>
  );
};

const AddressLink = styled(Link)`
  pointer-events: none;
  text-decoration: none;
`;

const AddressText = styled(Text)`
  color: var(--text-primary);
`;

const CopyIconButton = styled.button`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const AddressContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xxs, 8px);
  align-items: center;

  &:hover ${AddressLink} {
    pointer-events: auto;
  }

  &:hover ${AddressText} {
    color: var(--text-brand-medium);
  }

  &:hover ${CopyIconButton} {
    opacity: 1;
    pointer-events: auto;
  }

 
`;



export default Address;
