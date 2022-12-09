import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { AdminContainer, StyledEditIcon } from './admin.styled';
import useModal from 'hooks/useModal';
import FormDialog from './editModal';
import PushStatistics from './components/GovernanceGraph';
import { getGovernanceData } from '../../utils/api';
import { useData } from '../../contexts/DataContext';

export default function AdminView() {
  const { open, handleOpen, handleClose } = useModal();
  const { updateTracker, stagingToken } = useData();
  const [data, setData] = React.useState();
  const token = stagingToken;

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
      <Typography variant="h3" sx={{ mt: 5, mb: 10, textAlign: 'center' }}>
        Push Protocol Admin Dashboard
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <PushStatistics
          data={data?.Governance?.PGP_Proposals}
          title="PGP Proposals"
          label="PGP Proposals"
        />
        <PushStatistics
          data={data?.Governance?.PGP_Amount}
          title="Push Grants ($PUSH)"
          label="PGP_Amount"
        />
        <PushStatistics
          data={data?.Governance?.PGIP}
          title="Push Grant Improvement Proposal"
          label="PGIP"
        />
        <PushStatistics
          data={data?.Governance?.PGP_Categories}
          title="PGP Categories"
          label="PGP Category"
        />
        <PushStatistics
          data={data?.Downloads}
          title="Application Usage Data"
          label="Used In"
        />
      </Grid>

      <FormDialog open={open} handleClose={handleClose} />
    </AdminContainer>
  );
}
