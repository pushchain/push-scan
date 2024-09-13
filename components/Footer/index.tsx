// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme as Theme } from '../../contexts/ThemeContext';
import TwitterIconDark from "../../public/static/X-dark.svg";
import TwitterIconLight from "../../public/static/X.svg";
import GithubIconDark from "../../public/static/github-dark.svg";
import GithubIconLight from "../../public/static/github.svg";
import TelegramIconDark from "../../public/static/telegram-dark.svg";
import TelegramIconLight from "../../public/static/telegram.svg";
import DiscordIconDark from "../../public/static/discord-dark.svg";
import DiscordIconLight from "../../public/static/discord.svg";

import { Box, Text, TickCircleFilled, Link } from '../../blocks';

export default function Footer() {
  const { isDarkMode } = Theme();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin="spacing-none spacing-xxxxxl spacing-lg spacing-xxxxxl"
    >
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-sm"
      >
        <a
          href="https://twitter.com/PushProtocol"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Image
            alt="Twitter"
            height={18}
            width={17}
            src={
              isDarkMode ? TwitterIconDark : TwitterIconLight
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
            height={20}
            width={20}
            src={isDarkMode ? GithubIconDark : GithubIconLight}
          />
        </a>
        <a
          href="https://github.com/ethereum-push-notification-service/"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Image
            alt="Telegram"
            height={20}
            width={20}
            src={isDarkMode ? TelegramIconDark : TelegramIconLight}
          />
        </a>
        
        <a
          href="https://discord.com/invite/pushprotocol"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Image
            alt="Discord"
            height={20}
            width={20}
            src={
              isDarkMode ? DiscordIconDark : DiscordIconLight
            }
          />
        </a>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xxs"
      >
        <TickCircleFilled color='icon-state-success-bold'/>
        <Text variant='bes-semibold' color='text-tertiary'>All systems operational</Text>
      </Box>
    </Box>
  );
}
