import React from 'react';
import { Box, Text, Add, Ethereum } from '../../blocks';

const TxTravels = () => {
    return (
        <>
            <Box
                display={{ml: "none", dp: "flex"}}
                flexDirection="row"
                alignItems="flex-start"
                borderRadius="radius-sm"
                backgroundColor="surface-primary"
                gap="spacing-xxxxl"
                padding="spacing-md"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-semibold" color='text-secondary'>From</Text>
                    <Text variant="bs-semibold" color='text-secondary'>To</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                    <Box>
                        <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
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
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>From</Text>
                    <Box
                        display="flex"
                        flexDirection="row"
                        gap="spacing-xxxs"
                    >
                        <Ethereum height={20} width={20} />
                        <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                    </Box>

                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-semibold" color='text-secondary'>To</Text>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xs"
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-xxxs"
                        >
                            <Ethereum height={20} width={20} />
                            <Text variant="bs-regular" color='text-primary' ellipsis wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-xxxs"
                        >
                            <Ethereum height={20} width={20} />
                            <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-xxxs"
                        >
                            <Ethereum height={20} width={20} />
                            <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-xxxs"
                        >
                            <Ethereum height={20} width={20} />
                            <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-xxxs"
                        >
                            <Ethereum height={20} width={20} />
                            <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="spacing-xxxs"
                        >
                            <Ethereum height={20} width={20} />
                            <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
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
            </Box>
        </>
    );
};

export default TxTravels;