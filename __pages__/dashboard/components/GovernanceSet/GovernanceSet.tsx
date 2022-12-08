import React from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material';
import GovernanceGraph from '__pages__/admin/components/GovernanceGraph';
import { Text, HorizontalLine } from '__pages__/dashboard/dashboard.styled';
import { getGovernanceData } from '../../../../utils/api';

export default function GovernanceSet() {
  const isSmall = useMediaQuery('(max-width:480px)');
  const [data, setData] = React.useState();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicHVzaF9zdGFnaW5nX3VzZXIiLCJpYXQiOjE2NzA1MDg1OTAsImV4cCI6MTY3MDU5NDk5MH0.d-R-DJCeGnu-d5SmdavVgKfJstdOl2UihcCZUTIPAi4';

  React.useEffect(() => {
    (async () => {
      const res = await getGovernanceData({ token });
      setData(res?.governance_data);
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
      <Text size="18px">Push Governance</Text>
      <Grid container spacing={isSmall ? 0 : 3} justifyContent="center" mt={0}>
        <GovernanceGraph
          data={data?.Governance?.PGP_Amount}
          title="Push Grants ($PUSH)"
          label="PGP_Amount"
          value={123456}
        />
        <HorizontalLine />
        <GovernanceGraph
          data={data?.Governance?.PGIP}
          title="Push Governance Improvement Proposals"
          label="PGIP"
        />
        <HorizontalLine />
        <GovernanceGraph
          data={data?.Governance?.PGP_Proposals}
          title="Push Grants Proposals"
          label="PGP Proposals"
        />
        <HorizontalLine />
        <GovernanceGraph
          data={data?.Governance?.PGP_Categories}
          title="Push Grants Proposal Categories"
          label="PGP Category"
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
