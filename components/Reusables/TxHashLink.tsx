import React, { useState } from 'react';
import { Box, Text, Tooltip, Copy } from '../../blocks';
import { rightMaskString } from '../../utils/helpers'
import Link from 'next/link'

const TxHashLink = ({ txHash }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipText, setToolTipText] = useState('Copy');

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const copyData = () => {
        navigator.clipboard.writeText(txHash);
        setToolTipText('Copied');
        
        setTimeout(() => {
            setToolTipText('Copy');
        }, 1000);
    };

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
                <Box 
                    display="flex" 
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                > 
                    <Link href={`/transactions/${txHash}`}>
                        <Text 
                            variant='bs-regular'
                            color="text-brand-medium"
                        >
                            {rightMaskString(txHash)}
                        </Text>
                    </Link>
                    <Box display="flex" justifyContent="flex-end" cursor="pointer">
                        <Tooltip title={tooltipText} >
                            <Copy
                                onClick={copyData}
                                autoSize
                                size={24}
                                color="icon-tertiary"
                            />
                        </Tooltip>
                    </Box>
                </Box>
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
