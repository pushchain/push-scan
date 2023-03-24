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
import { DataContextType } from '../../../../types/context';
import { ThemeType } from '../../../../types/theme';
import { DATA_KEYS } from '../../../../utils/constants';

export default function GovernanceSet() {
  const isMobile = useMediaQuery('(max-width:480px)');
  const {
    setPushIntegrations,
    setGovernanceData,
    governanceData,
    pushGrants,
    setPushGrants,
  }: DataContextType = useData();
  const theme = useTheme() as ThemeType;

  React.useEffect(() => {
    (async () => {
      const governanceResponse = await getGovernanceData();
      setGovernanceData?.(governanceResponse?.governance_data);
      sessionStorage.setItem(
        DATA_KEYS.GOVERNANCE_DATA,
        JSON.stringify(governanceResponse?.governance_data)
      );
      setPushIntegrations?.(
        governanceResponse?.governance_data?.Miscellaneous?.Push_Integrations
      );
      sessionStorage.setItem(
        DATA_KEYS.PUSH_INTEGRATIONS,
        JSON.stringify(
          governanceResponse?.governance_data?.Miscellaneous?.Push_Integrations
        )
      );
      setPushGrants?.(
        governanceResponse?.governance_data?.Miscellaneous?.Push_Grants
      );
      sessionStorage.setItem(
        DATA_KEYS.PUSH_GRANTS,
        JSON.stringify(
          governanceResponse?.governance_data?.Miscellaneous?.Push_Grants
        )
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
      mt={isMobile ? 2 : 1.5}
    >
      <Text size="18px" marginTop={isMobile ? '0px' : '40px'}>
        Push Governance
      </Text>
      <Grid container spacing={isMobile ? 0 : 3} justifyContent="center" mt={0}>
        <GovernanceGraph
          data={governanceData?.Governance?.PGP_Amount}
          title="Push Grants ($PUSH)"
          label="PGP_Amount"
          value={pushGrants}
          colorSet={theme.graph.grantsAndPIPColors}
        />
        <HorizontalLine />
        <GovernanceGraph
          data={governanceData?.Governance?.PGIP}
          title="Push Governance Improvement Proposals"
          label="PGIP"
          colorSet={theme.graph.grantsAndPIPColors}
        />
        <HorizontalLine />
        <GovernanceGraph
          data={governanceData?.Governance?.PGP_Proposals}
          title="Push Grants Proposals"
          label="PGP Proposals"
          colorSet={theme.graph.grantsProposals}
        />
        <HorizontalLine />
        <GovernanceGraph
          data={governanceData?.Governance?.PGP_Categories}
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
