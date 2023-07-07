// React, NextJS imports
import React from 'react';

// External Library imports
import { Grid } from '@mui/material';
import { useTheme } from 'styled-components';

// Internal Components imports
import {
  AdminContainer,
  Input,
  Button,
} from '../../components/Admin/admin.styled';
import useModal from '../../hooks/useModal';
import {
  GovernanceImprovementEditPanel,
  PGPProposalsEditPanel,
  PushGrantsEditPanel,
  PushGrantsCategoriesEditPanel,
} from '../../components/Admin/EditPanels';
import { getGovernanceData } from '../../utils/api';
import { useData } from '../../contexts/DataContext';
import { ItemVV2 } from '../../components/Reusables/SharedStyling';
import { Text } from '../../components/Dashboard/dashboard.styled';
import { ThemeType } from '../../types/theme';

export default function Admin() {
  const {
    handleSubmit,
    updateGovernanceImprovementData,
    updateGrantProposalData,
    updateGrantsData,
    updateGrantsCategoryData,
    updatePushIntegrationData,
  } = useModal();
  const { updateTracker } = useData();
  const [data, setData] = React.useState();
  const [showIndex, setShowIndex] = React.useState<number>(0);
  const [grantProposalData, setGrantProposalData] = React.useState({
    approved: -1,
    open: -1,
    closed: -1,
  });
  const [grantsData, setGrantsData] = React.useState({
    grants: -1,
    approved: -1,
    yetToBeAllocated: -1,
  });
  const [governaceImproventData, setGovernanceImprovementData] = React.useState(
    {
      approved: -1,
      closed: -1,
    }
  );
  const [categoryData, setCategoryData] = React.useState({
    defi: -1,
    nft: -1,
    dao: -1,
    education: -1,
    marketing: -1,
    tooling: -1,
    gaming: -1,
    others: -1,
  });
  const [pushIntegrationData, setPushIntegrationData] =
    React.useState<number>(0);
  const theme = useTheme() as ThemeType;

  React.useEffect(() => {
    (async () => {
      const res = await getGovernanceData();
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
