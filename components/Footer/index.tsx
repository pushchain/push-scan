// React, NextJS imports
import React, { useEffect, useState } from 'react';
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
import { getHeathCheck } from '../../utils/api';
import { Box, Text, TickCircleFilled, CrossFilled, Link } from '../../blocks';

export default function Footer() {
  const { isDarkMode } = Theme();
  const [data, setData] = useState(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await getHeathCheck();
        setData(res.status === "OK");
      } catch (e) {
        console.log('Error occured', e);
      }
      setIsLoading(false);
    })();
  }, []);


  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin={{ initial: "spacing-none spacing-xxxxxl spacing-md spacing-xxxxxl", ml: "spacing-sm" }}
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
          href="https://t.me/epnsproject"
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
        { data ? <TickCircleFilled color='icon-state-success-bold'/> : <CrossFilled color='icon-state-danger-bold' /> }
        <Text variant='bes-semibold' color='text-tertiary'>{ data ? 'All systems operational' : 'Not all system are operational' }</Text>
      </Box>
    </Box>
  );
}
