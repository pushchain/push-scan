// React, NextJS imports
import React from 'react';

// Internal Components imports
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
import { ItemHV2, ImageV2 } from '../../../../components/SharedStyling';

export const PushGrantsEditPanel = ({
  GraphData,
  colorSet,
  GrantAmount,
  showIndex,
  setShowIndex,
  updateGrantsData,
  grantsData,
  setGrantsData,
}) => {
  return (
    <FormContainer>
      <PushStatistics
        data={GraphData}
        title="Push Grants ($PUSH)"
        value={GrantAmount}
        label="PGP_Amount"
        colorSet={colorSet}
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
            <InfoContent>Push Grants: Total amount of push grant</InfoContent>
            <InfoContent>Approved: Amount of grant got approved</InfoContent>
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
  );
};
