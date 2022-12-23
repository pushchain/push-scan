import React from 'react';
import {
  FooterContainer,
  LinkContainer,
  LeftContainer,
  RightContainer,
} from './footer.styled';
import { useTheme as Theme } from '../../contexts/ThemeContext';
import { Box } from '@mui/material';
import { Text } from '../../__pages__/dashboard/dashboard.styled';
import { useTheme } from 'styled-components';

export default function Footer() {
  const { isDarkMode } = Theme();
  const theme = useTheme();
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
        <LinkContainer>
          <a href="https://push.org/tos" target={'_blank'} rel={'noreferrer'}>
            <Text color={theme.text.link}>Terms</Text>
          </a>
          <a
            href="https://push.org/privacy"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <Text color={theme.text.link}>Privacy</Text>
          </a>
          <a
            href="https://docs.push.org/hub/"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <Text color={theme.text.link}>Docs</Text>
          </a>
        </LinkContainer>
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
