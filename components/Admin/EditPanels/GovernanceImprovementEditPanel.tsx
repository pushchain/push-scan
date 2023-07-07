// React, NextJS imports
import React from 'react';
// External Library imports
// Internal Components imports
import {
  Input,
  FormContainer,
  InputContainer,
  InfoHeader,
  InfoContent,
  Button,
  InfoContainer,
} from '../../Admin/admin.styled';
import PushStatistics from '../../../charts/DoughnutChart';
import { ItemHV2, ImageV2 } from '../../Reusables/SharedStyling';

export const GovernanceImprovementEditPanel = ({
  GraphData,
  colorSet,
  showIndex,
  setShowIndex,
  governaceImproventData,
  setGovernanceImprovementData,
  updateGovernanceImprovementData,
}) => {
  return (
    <FormContainer>
      <PushStatistics
        data={GraphData}
        title="Push Governance Improvement Proposal"
        label="PGIP"
        colorSet={colorSet}
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
              Data required to edit Push Governance Improvement Proposals Data
            </InfoHeader>
            <InfoContent>
              Approved: Number of Improvement proposals got approved
            </InfoContent>
            <InfoContent>
              Closed: Number of improvement proposals got closed/rejected
            </InfoContent>
            <ItemHV2>
              <ImageV2
                src={"./static/edit-1.png"}
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
  );
};
