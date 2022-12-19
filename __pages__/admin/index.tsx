import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { AdminContainer, StyledEditIcon } from './admin.styled';
import useModal from 'hooks/useModal';
import FormDialog from './editModal';
import PushStatistics from './components/GovernanceGraph';
import { getGovernanceData } from '../../utils/api';
import { useData } from '../../contexts/DataContext';
import { useTheme } from 'styled-components';

export default function AdminView() {
  const { open, handleOpen, handleClose } = useModal();
  const { updateTracker, token } = useData();
  const [data, setData] = React.useState();
  const theme = useTheme();

  React.useEffect(() => {
    (async () => {
      const res = await getGovernanceData({ token });
      setData(res?.governance_data);
    })();
  }, [updateTracker]);

  return (
    <AdminContainer maxWidth="xl">
      <Button variant="outlined" onClick={handleOpen}>
        Edit
      </Button>
      <Typography
        variant="h3"
        sx={{ mt: 5, mb: 10, textAlign: 'center', color: theme.text.primary }}
      >
        Push Protocol Admin Dashboard
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <PushStatistics
          data={data?.Governance?.PGP_Proposals}
          title="PGP Proposals"
          label="PGP Proposals"
          colorSet={theme.graph.grantsProposals}
        />
        <PushStatistics
          data={data?.Governance?.PGP_Amount}
          title="Push Grants ($PUSH)"
          label="PGP_Amount"
          colorSet={theme.graph.grantsAndPIPColors}
        />
        <PushStatistics
          data={data?.Governance?.PGIP}
          title="Push Grant Improvement Proposal"
          label="PGIP"
          colorSet={theme.graph.grantsAndPIPColors}
        />
        <PushStatistics
          data={data?.Governance?.PGP_Categories}
          title="PGP Categories"
          label="PGP Category"
          colorSet={theme.graph.pgpCategories}
        />
        {/* <PushStatistics
          data={data?.Downloads}
          title="Application Usage Data"
          label="Used In"
        /> */}
      </Grid>

      <FormDialog open={open} handleClose={handleClose} />
    </AdminContainer>
  );
}
