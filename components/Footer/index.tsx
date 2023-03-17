// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { Box } from '@mui/material';
import { useTheme } from 'styled-components';

// Internal Components imports
import {
  FooterContainer,
  LinkContainer,
  LeftContainer,
  RightContainer,
} from './footer.styled';
import { useTheme as Theme } from '../../contexts/ThemeContext';
import { Text } from '../../__pages__/dashboard/dashboard.styled';

export default function Footer() {
  const { isDarkMode } = Theme();
  const theme = useTheme();
  return (
    <FooterContainer>
      <LeftContainer>
        <a href="https://www.push.org" target={'_blank'} rel={'noreferrer'}>
          <Image
            alt="Push Logo"
            width={125}
            height={48}
            src={
              isDarkMode ? '/static/push-logo-1.svg' : '/static/push-logo-2.svg'
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
          <Image
            alt="Twitter"
            height={24}
            width={30}
            src={
              isDarkMode ? '/static/twitter.svg' : '/static/twitter-dark.svg'
            }
          />
        </a>
        <a
          href="https://github.com/ethereum-push-notification-service/"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Image
            alt="Github"
            height={26}
            width={26}
            src={isDarkMode ? '/static/github.svg' : '/static/github-dark.svg'}
          />
        </a>
        <a
          href="https://discord.com/invite/pushprotocol"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Image
            alt="Discord"
            height={23}
            width={32}
            src={
              isDarkMode ? '/static/discord.svg' : '/static/discord-dark.svg'
            }
          />
        </a>
      </RightContainer>
    </FooterContainer>
  );
}
