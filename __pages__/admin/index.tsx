import React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  AdminContainer,
  Input,
  FormContainer,
  InputContainer,
  InfoHeader,
  InfoContent,
  Button,
  InfoContainer,
} from './admin.styled';
import useModal from '../../hooks/useModal';
import {
  GovernanceImprovementEditPanel,
  PGPProposalsEditPanel,
  PushGrantsEditPanel,
  PushGrantsCategoriesEditPanel,
} from './components/EditPanels';
import PushStatistics from './components/GovernanceGraph';
import { getGovernanceData } from '../../utils/api';
import { useData } from '../../contexts/DataContext';
import { useTheme } from 'styled-components';
import { ItemHV2, ItemVV2, ImageV2 } from '../../theme/SharedStyling';
import { Text } from '../dashboard/dashboard.styled';

export default function AdminView() {
  const {
    handleSubmit,
    updateGovernanceImprovementData,
    updateGrantProposalData,
    updateGrantsData,
    updateGrantsCategoryData,
    updatePushIntegrationData,
  } = useModal();
  const { updateTracker, token } = useData();
  const [data, setData] = React.useState();
  const [showIndex, setShowIndex] = React.useState<number>(0);
  const [grantProposalData, setGrantProposalData] = React.useState({
    approved: 0,
    open: 0,
    closed: 0,
  });
  const [grantsData, setGrantsData] = React.useState({
    grants: 0,
    approved: 0,
    yetToBeAllocated: 0,
  });
  const [governaceImproventData, setGovernanceImprovementData] = React.useState(
    {
      approved: 0,
      closed: 0,
    }
  );
  const [categoryData, setCategoryData] = React.useState({
    defi: 0,
    nft: 0,
    dao: 0,
    education: 0,
    marketing: 0,
    tooling: 0,
    gaming: 0,
    others: 0,
  });
  const [pushIntegrationData, setPushIntegrationData] =
    React.useState<number>(0);
  const theme = useTheme();

  React.useEffect(() => {
    (async () => {
      const res = await getGovernanceData({ token });
      setData(res?.governance_data);
    })();
  }, [updateTracker]);

  return (
    <AdminContainer>
      <Text size="32px" marginTop="40px" marginBottom="20px">
        Push Protocol Admin Panel
      </Text>

      <Grid container justifyContent="center">
        <PGPProposalsEditPanel
          GraphData={data?.Governance?.PGP_Proposals}
          colorSet={theme.graph.grantsProposals}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
          grantProposalData={grantProposalData}
          setGrantProposalData={setGrantProposalData}
          updateGrantProposalData={updateGrantProposalData}
        />

        <PushGrantsEditPanel
          GraphData={data?.Governance?.PGP_Amount}
          GrantAmount={data?.Miscellaneous?.Push_Grants}
          colorSet={theme.graph.grantsAndPIPColors}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
          grantsData={grantsData}
          setGrantsData={setGrantsData}
          updateGrantsData={updateGrantsData}
        />

        <GovernanceImprovementEditPanel
          GraphData={data?.Governance?.PGIP}
          colorSet={theme.graph.grantsAndPIPColors}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
          governaceImproventData={governaceImproventData}
          setGovernanceImprovementData={setGovernanceImprovementData}
          updateGovernanceImprovementData={updateGovernanceImprovementData}
        />

        <PushGrantsCategoriesEditPanel
          GraphData={data?.Governance?.PGP_Categories}
          colorSet={theme.graph.pgpCategories}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
          categoryData={categoryData}
          setCategoryData={setCategoryData}
          updateGrantsCategoryData={updateGrantsCategoryData}
        />

        {/* <PushStatistics
          data={data?.Downloads}
          title="Application Usage Data"
          label="Used In"
        /> */}
        <ItemVV2>
          <Input
            placeholder="No of Push Integrations"
            onChange={(e) => setPushIntegrationData(parseInt(e.target.value))}
          />
          <Button
            onClick={() => {
              updatePushIntegrationData(pushIntegrationData);
              setPushIntegrationData(0);
            }}
          >
            Save Push Integration Data
          </Button>
          <Button
            onClick={handleSubmit}
            margin="20px 0px 0px"
            fontSize="24px"
            hoverColor="#cf1c84"
          >
            Upload Governance Data
          </Button>
        </ItemVV2>
      </Grid>
    </AdminContainer>
  );
}
