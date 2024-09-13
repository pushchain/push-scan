import React, { useState } from 'react';
import { Box, Text  } from '../../blocks';
import { rightMaskString } from '../../utils/helpers'
import Link from 'next/link'

const TxHashLink = ({ txHash }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Box 
            display="flex" 
            flexDirection="row" 
            gap="spacing-xxs" 
            alignItems="center" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? (
                <Link href={`/transactions/${txHash}`}>
                    <Text 
                        variant='bs-regular'
                        color="text-brand-medium"
                    >
                        {rightMaskString(txHash)}
                    </Text>
                </Link>
                
            ) : (
                <Text 
                    variant='bs-regular'
                    color="text-primary"
                >
                    {rightMaskString(txHash)}
                </Text>
            )}
        </Box>
    );
};

export default TxHashLink;
