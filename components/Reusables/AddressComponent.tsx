import React, { useState } from 'react';
import { Box, Text  } from '../../blocks';
import { EtheriumMonotone, BnbMonotone, PolygonMonotone, PushMonotone, ArbitrumMonotone, OptimismMonotone } from '../../blocks/icons'
import { convertCaipToObject, centerMaskString } from '../../utils/helpers'
import Link from 'next/link'
import styled from 'styled-components';

const Address = ({ address, wrap = false, masking = true }) => {
    function getChainIcon(chainId) {
        try {
            if (!chainId) {
                return <PushMonotone />
            }

            switch(Number(chainId)) {
                case 1:
                case 11155111:
                    return <EtheriumMonotone height={14} width={14} color="icon-tertiary" />
                case 137:
                case 80002:
                case 1101:
                case 2442:
                    return <PolygonMonotone height={14} width={14} color="icon-tertiary"/>
                case 56:
                case 97:
                    return <BnbMonotone height={14} width={14} color="icon-tertiary"/>
                case 42161:
                case 421614:
                    return <ArbitrumMonotone height={14} width={14} color="icon-tertiary" />
                case 10:
                case 11155420:
                    return <OptimismMonotone height={14} width={14} color="icon-tertiary" />
                default: 
                    return <PushMonotone height={14} width={14} />
            }
        } catch (err) {
            return <PushMonotone />
        }
    }

    const { result } = convertCaipToObject(address)

    const maskedAddress = masking ? centerMaskString(result.address) : result.address;

    return (
        <AddressContainer>
            {result.chainId && getChainIcon(result.chainId)}
            <AddressLink href={`/users/${address}`}>
            <AddressText wrap={wrap} variant="bs-regular">
                {maskedAddress}
            </AddressText>
            </AddressLink>
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

const AddressContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;

    &:hover ${/* sc-selector */ AddressLink} {
        pointer-events: auto;
    }

    &:hover ${/* sc-selector */ AddressText} {
        color: var(--text-brand-medium);
    }
`;

export default Address;
