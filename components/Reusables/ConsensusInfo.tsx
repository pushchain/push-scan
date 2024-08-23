import React from 'react';
import { Box, Text, Button, Add, Ethereum } from '../../blocks';

const ConsensusInfo = () => {
    return (
        <>
            <Box
                display={{ml: "none", dp: "flex"}}
                flexDirection="column"
                alignItems="flex-start"
                borderRadius="radius-sm"
                backgroundColor="surface-primary"
                padding="spacing-md"
                gap="spacing-md"
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing-xxxxl"
                >
                    <Box>
                        <Text variant="bs-semibold" color='text-secondary'>Consensus Info</Text>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xs"
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>
                        
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text color='text-state-danger-bold'>Reject</Text>
                            </Button>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>
                        
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-xxs"
                            color="text-brand-medium"
                        >
                            <Add />
                            <Text variant='bes-semibold' color="text-brand-medium">Show more</Text>
                        </Box>

                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing-xxxxl"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Payload Data</Text>

                    <Box
                        border="border-sm solid stroke-tertiary"
                        borderRadius="radius-xs"
                        padding="spacing-sm"
                        width="68vw"
                    >
                        <Text variant='bs-semibold' color='text-tertiary' wrap>0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000006419000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024ac6824ffa0000000000000000000000000000000000000000000000000000000000c2b5a6000000000000000000000000000000000000000000000000000000000000017f00000000000000000000000000000000000000000000000000000000000020d4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020d40000000000000000000000000000000000000000000000000000000000c2f8cd0000000000000000000</Text>
                    </Box>

                </Box>
            </Box>

            <Box
                display={{ ml: "flex", dp: "none" }}
                flexDirection="column"
                alignItems="flex-start"
                borderRadius="radius-sm"
                backgroundColor="surface-primary"
                gap="spacing-md"
                padding="spacing-xs" 
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xs"
                >
                    <Box>
                        <Text variant="bs-semibold" color='text-secondary'>Consensus Info</Text>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xs"
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                            width="50vw"
                        >
                            <Box
                                display="flex"
                                flexDirection="row"
                                gap="spacing-xxxs"
                            >
                                <Ethereum height={20} width={20} />
                                <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            </Box>
                                
                                
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>
                        
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Box
                                display="flex"
                                flexDirection="row"
                                gap="spacing-xxxs"
                            >
                                <Ethereum height={20} width={20} />
                                <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            </Box>
                                
                                
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Box
                                display="flex"
                                flexDirection="row"
                                gap="spacing-xxxs"
                            >
                                <Ethereum height={20} width={20} />
                                <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            </Box>
                                
                                
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>
                        
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-lg"
                        >
                            <Box
                                display="flex"
                                flexDirection="row"
                                gap="spacing-xxxs"
                            >
                                <Ethereum height={20} width={20} />
                                <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                            </Box>
                                
                                
                            <Button
                                aria-label="Cancel"
                                size="extraSmall"
                                variant="outline"
                                onClick={() => {}}
                            >
                                <Text>Accept</Text>
                            </Button>
                        </Box>
                        
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-xxs"
                            color="text-brand-medium"
                        >
                            <Add />
                            <Text variant='bes-semibold' color="text-brand-medium">Show more</Text>
                        </Box>

                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Payload Data</Text>

                    <Box
                        border="border-sm solid stroke-tertiary"
                        borderRadius="radius-xs"
                        padding="spacing-sm"
                        width="88vw"
                    >
                        <Text variant='bs-semibold' color='text-tertiary' wrap>0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000006419000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024ac6824ffa0000000000000000000000000000000000000000000000000000000000c2b5a6000000000000000000000000000000000000000000000000000000000000017f00000000000000000000000000000000000000000000000000000000000020d4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020d40000000000000000000000000000000000000000000000000000000000c2f8cd0000000000000000000</Text>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default ConsensusInfo;