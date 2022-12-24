// React, NextJS imports
import React from 'react';

// External Library imports
import { Grid, Box, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';

// Internal Components imports
import GovernanceGraph from '../../../admin/components/GovernanceGraph';
import { Text, HorizontalLine } from '../../dashboard.styled';
import { getGovernanceData } from '../../../../utils/api';
import { useData } from '../../../../contexts/DataContext';

export default function GovernanceSet() {
  const isMobile = useMediaQuery('(max-width:480px)');
  const [data, setData] = React.useState();
  const { token, setPushIntegrations } = useData();
  const theme = useTheme();

  React.useEffect(() => {
    (async () => {
      const governanceResponse = await getGovernanceData({ token });
      setData(governanceResponse?.governance_data);
      setPushIntegrations(
        governanceResponse?.governance_data?.Miscellaneous?.Push_Integrations
      );
    })();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
      mt={5}
    >
      <Text size="18px" marginTop={isMobile ? '0px' : '40px'}>
        Push Governance
      </Text>
      <Grid container spacing={isMobile ? 0 : 3} justifyContent="center" mt={0}>
        <GovernanceGraph
          data={data?.Governance?.PGP_Amount}
          title="Push Grants ($PUSH)"
          label="PGP_Amount"
          value={data?.Miscellaneous?.Push_Grants}
          colorSet={theme.graph.grantsAndPIPColors}
        />
        <HorizontalLine />
        <GovernanceGraph
          data={data?.Governance?.PGIP}
          title="Push Governance Improvement Proposals"
          label="PGIP"
          colorSet={theme.graph.grantsAndPIPColors}
        />
        <HorizontalLine />
        <GovernanceGraph
          data={data?.Governance?.PGP_Proposals}
          title="Push Grants Proposals"
          label="PGP Proposals"
          colorSet={theme.graph.grantsProposals}
        />
        <HorizontalLine />
        <GovernanceGraph
          data={data?.Governance?.PGP_Categories}
          title="Push Grants Proposal Categories"
          label="PGP Category"
          colorSet={theme.graph.pgpCategories}
        />
        <HorizontalLine />
        {/* <GovernanceGraph
        data={data?.Downloads}
        title="Application Usage Data"
        label="Used In"
      /> */}
      </Grid>
    </Box>
  );
}
