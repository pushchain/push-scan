import React from 'react';
import {
  Input,
  FormContainer,
  InputContainer,
  InfoHeader,
  InfoContent,
  Button,
  InfoContainer,
} from '../../admin.styled';
import PushStatistics from '../GovernanceGraph';
import { ItemHV2, ImageV2 } from '../../../../theme/SharedStyling';

export const PGPProposalsEditPanel = ({
  GraphData,
  colorSet,
  showIndex,
  setShowIndex,
  setGrantProposalData,
  grantProposalData,
  updateGrantProposalData,
}) => {
  return (
    <FormContainer>
      <PushStatistics
        data={GraphData}
        title="Push Grants Proposals"
        label="PGP Proposals"
        colorSet={colorSet}
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
  );
};
