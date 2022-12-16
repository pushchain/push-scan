import React from 'react';
import Link from 'next/link';
import { FooterContainer } from './footer.styled';
import { useTheme } from 'contexts/ThemeContext';
import { Box, Grid } from '@mui/material';
import { Text } from '__pages__/dashboard/dashboard.styled';
import { ItemHV2 } from 'theme/SharedStyling';
import styled from 'styled-components';

export default function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <FooterContainer>
      <LeftContainer>
        <a href="https://www.push.org" target={'_blank'} rel={'noreferrer'}>
          <Box
            component="img"
            width="125px"
            height="48px"
            src={
              isDarkMode
                ? './static/push-logo-1.svg'
                : './static/push-logo-2.svg'
            }
          />
        </a>
        <Box display="flex" gap={3}>
          <a href="https://push.org/tos" target={'_blank'} rel={'noreferrer'}>
            <Text color="#9C9CBE">Terms</Text>
          </a>
          <a
            href="https://push.org/privacy"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <Text color="#9C9CBE">Privacy</Text>
          </a>
          <a
            href="https://docs.push.org/hub/"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <Text color="#9C9CBE">Docs</Text>
          </a>
        </Box>
      </LeftContainer>
      <RightContainer>
        <a
          href="https://twitter.com/PushProtocol"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Box component="img" src="./static/twitter.svg" />
        </a>
        <a
          href="https://github.com/ethereum-push-notification-service/"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Box component="img" src="./static/github.svg" />
        </a>
        <a
          href="https://discord.com/invite/pushprotocol"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Box component="img" src="./static/discord.svg" />
        </a>
      </RightContainer>
    </FooterContainer>
  );
}

const LeftContainer = styled(ItemHV2)`
  gap='30px';
  '@media(max-width:480px)': {
    flexdirection: 'column';
  }
`;

const RightContainer = styled(ItemHV2)`
  gap={3};
  cursor: 'pointer';
`;
