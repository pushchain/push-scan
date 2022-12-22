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
  GraphContainer,
} from './admin.styled';
import useModal from '../../hooks/useModal';

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
        <FormContainer>
          <PushStatistics
            data={data?.Governance?.PGP_Proposals}
            title="Push Grants Proposals"
            label="PGP Proposals"
            colorSet={theme.graph.grantsProposals}
          />
          <InputContainer>
            {showIndex === 1 ? (
              <>
                <Input
                  placeholder="Approved"
                  onChange={(e) =>
                    setGrantProposalData({
                      ...grantProposalData,
                      ['approved']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Open"
                  onChange={(e) =>
                    setGrantProposalData({
                      ...grantProposalData,
                      ['open']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Closed"
                  onChange={(e) =>
                    setGrantProposalData({
                      ...grantProposalData,
                      ['closed']: parseInt(e.target.value),
                    })
                  }
                />

                <Button
                  margin="5px"
                  onClick={() => {
                    updateGrantProposalData(grantProposalData);
                    setShowIndex(0);
                  }}
                >
                  Save Push Grants Proposal Data
                </Button>
                <Button margin="5px" onClick={() => setShowIndex(0)}>
                  Close
                </Button>
              </>
            ) : (
              <InfoContainer>
                <InfoHeader>
                  Data required to edit Push Grants Proposals Data
                </InfoHeader>
                <InfoContent>
                  Approved: Number of proposals got approved
                </InfoContent>
                <InfoContent>
                  Open: Number of proposals in open/inprogress state
                </InfoContent>
                <InfoContent>
                  Closed: Number of proposal queries got closed
                </InfoContent>

                <ItemHV2>
                  <ImageV2
                    src="./static/edit-1.png"
                    height="50px"
                    width="50px"
                    cursor="pointer"
                    onClick={() => setShowIndex(1)}
                  />
                </ItemHV2>
              </InfoContainer>
            )}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <PushStatistics
            data={data?.Governance?.PGP_Amount}
            title="Push Grants ($PUSH)"
            value={data?.Miscellaneous?.Push_Grants}
            label="PGP_Amount"
            colorSet={theme.graph.grantsAndPIPColors}
          />

          <InputContainer>
            {showIndex === 2 ? (
              <>
                <Input
                  placeholder="Push Grants"
                  onChange={(e) =>
                    setGrantsData({
                      ...grantsData,
                      ['grants']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Approved"
                  onChange={(e) =>
                    setGrantsData({
                      ...grantsData,
                      ['approved']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Yet to be allocated"
                  onChange={(e) =>
                    setGrantsData({
                      ...grantsData,
                      ['yetToBeAllocated']: parseInt(e.target.value),
                    })
                  }
                />

                <Button
                  margin="5px"
                  onClick={() => {
                    updateGrantsData(grantsData);
                    setShowIndex(0);
                  }}
                >
                  Save Push Grants Data
                </Button>
                <Button margin="5px" onClick={() => setShowIndex(0)}>
                  Close
                </Button>
              </>
            ) : (
              <InfoContainer>
                <InfoHeader>Data required to edit Push Grants Data</InfoHeader>
                <InfoContent>
                  Push Grants: Total amount of push grant
                </InfoContent>
                <InfoContent>
                  Approved: Amount of grant got approved
                </InfoContent>
                <InfoContent>
                  Yet to be allocated: Amount of grant yet to be allocated
                </InfoContent>
                <ItemHV2>
                  <ImageV2
                    src="./static/edit-1.png"
                    height="50px"
                    width="50px"
                    cursor="pointer"
                    onClick={() => setShowIndex(2)}
                  />
                </ItemHV2>
              </InfoContainer>
            )}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <PushStatistics
            data={data?.Governance?.PGIP}
            title="Push Governance Improvement Proposal"
            label="PGIP"
            colorSet={theme.graph.grantsAndPIPColors}
          />

          <InputContainer>
            {showIndex === 3 ? (
              <>
                <Input
                  placeholder="Approved"
                  onChange={(e) =>
                    setGovernanceImprovementData({
                      ...governaceImproventData,
                      ['approved']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Closed"
                  onChange={(e) =>
                    setGovernanceImprovementData({
                      ...governaceImproventData,
                      ['closed']: parseInt(e.target.value),
                    })
                  }
                />

                <Button
                  margin="5px"
                  onClick={() => {
                    updateGovernanceImprovementData(governaceImproventData);
                    setShowIndex(0);
                  }}
                >
                  Save Push Governance Improvement Proposal Data
                </Button>
                <Button margin="5px" onClick={() => setShowIndex(0)}>
                  Close
                </Button>
              </>
            ) : (
              <InfoContainer>
                <InfoHeader>
                  Data required to edit Push Governance Improvement Proposals
                  Data
                </InfoHeader>
                <InfoContent>
                  Approved: Number of Improvement proposals got approved
                </InfoContent>
                <InfoContent>
                  Closed: Number of improvement proposals got closed/rejected
                </InfoContent>
                <ItemHV2>
                  <ImageV2
                    src="./static/edit-1.png"
                    height="50px"
                    width="50px"
                    cursor="pointer"
                    onClick={() => setShowIndex(3)}
                  />
                </ItemHV2>
              </InfoContainer>
            )}
          </InputContainer>
        </FormContainer>
        <FormContainer>
          <PushStatistics
            data={data?.Governance?.PGP_Categories}
            title="Push Grants Proposal Categories"
            label="PGP Category"
            colorSet={theme.graph.pgpCategories}
          />

          <InputContainer>
            {showIndex === 4 ? (
              <ItemHV2
                justifyContent="space-around"
                height="450px"
                overflow="auto"
              >
                <Input
                  placeholder="Defi"
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      ['defi']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="NFT"
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      ['nft']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="DAO"
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      ['dao']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Education"
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      ['education']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Marketing"
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      ['marketing']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Tooling"
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      ['tooling']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Gaming"
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      ['gaming']: parseInt(e.target.value),
                    })
                  }
                />
                <Input
                  placeholder="Others"
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      ['others']: parseInt(e.target.value),
                    })
                  }
                />
                <ItemHV2>
                  <Button
                    margin="5px"
                    onClick={() => {
                      updateGrantsCategoryData(categoryData);
                      setShowIndex(0);
                    }}
                  >
                    Save Push Grants Proposal Categories Data
                  </Button>
                  <Button margin="5px" onClick={() => setShowIndex(0)}>
                    Close
                  </Button>
                </ItemHV2>
              </ItemHV2>
            ) : (
              <>
                <InfoContainer>
                  <InfoHeader>
                    Data required to edit Push Grants Proposal Categories Data
                  </InfoHeader>
                  <InfoContent>
                    Defi: Number of Proposals came from Defi Domain
                  </InfoContent>
                  <InfoContent>
                    NFT: Number of Proposals came from NFT Domain
                  </InfoContent>
                  <InfoContent>
                    DAO: Number of Proposals came from DAO Domain
                  </InfoContent>
                  <InfoContent>
                    Education: Number of Proposals came from Education Domain
                  </InfoContent>
                  <InfoContent>
                    Marketing: Number of Proposals came from Marketing Domain
                  </InfoContent>
                  <InfoContent>
                    Tooling: Number of Proposals came from Tooling Domain
                  </InfoContent>
                  <InfoContent>
                    Gaming: Number of Proposals came from Gaming Domain
                  </InfoContent>
                  <InfoContent>
                    Others: Number of Proposals came from other minor domains
                  </InfoContent>
                  <ItemHV2>
                    <ImageV2
                      src="./static/edit-1.png"
                      height="50px"
                      width="50px"
                      cursor="pointer"
                      onClick={() => setShowIndex(4)}
                    />
                  </ItemHV2>
                </InfoContainer>
              </>
            )}
          </InputContainer>
        </FormContainer>
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
            onClick={() => updatePushIntegrationData(pushIntegrationData)}
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
