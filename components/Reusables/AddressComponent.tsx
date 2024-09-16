import React, { useState } from 'react';
import { Box, Text  } from '../../blocks';
import { EtheriumMonotone, BnbMonotone, PolygonMonotone, PushMonotone } from '../../blocks/icons'
import { convertCaipToAddress, convertCaipToObject, centerMaskString } from '../../utils/helpers'
import Link from 'next/link'

const Address = ({ address, wrap = false, masking = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  function getChainIcon(chainId) {
    try {
      if (!chainId) {
        return <PushMonotone />
      }

      switch(Number(chainId)) {
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

  const { result } = convertCaipToObject(address)
  
  const maskedAddress = masking ? centerMaskString(result.address) : result.address;

  return (
    <Box 
      display="flex" 
      flexDirection="row" 
      gap="spacing-xxs" 
      alignItems="center" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      { getChainIcon(result.chainId) }
      {isHovered ? (
        <Link
          href={`/users/${address}`}
        >
          <Text wrap variant='bs-regular' color="text-brand-medium">
            {maskedAddress}
          </Text>
        </Link>
      ) : (
        <Text wrap variant='bs-regular' color="text-primary">
            {maskedAddress}
        </Text>
      )}
    </Box>
  );
};

export default Address;
