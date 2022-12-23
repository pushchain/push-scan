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
import { ItemHV2, ImageV2 } from '../../../../theme/SharedStyling';

export const PushGrantsCategoriesEditPanel = ({
  GraphData,
  colorSet,
  showIndex,
  setShowIndex,
  categoryData,
  setCategoryData,
  updateGrantsCategoryData,
}) => {
  return (
    <FormContainer>
      <PushStatistics
        data={GraphData}
        title="Push Grants Proposal Categories"
        label="PGP Category"
        colorSet={colorSet}
      />

      <InputContainer>
        {showIndex === 4 ? (
          <ItemHV2 justifyContent="space-around" height="450px" overflow="auto">
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
  );
};
