import { FooterContainer } from './footer.styled';
import { useTheme } from 'contexts/ThemeContext';
import { Box, Grid } from '@mui/material';
import { Text } from '__pages__/dashboard/dashboard.styled';

export default function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <FooterContainer>
      <Box
        display="flex"
        alignItems="center"
        gap="30px"
        sx={{
          '@media(max-width:480px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Box
          component="img"
          width="125px"
          height="48px"
          src={
            isDarkMode ? './static/push-logo-1.svg' : './static/push-logo-2.svg'
          }
        />
        <Box display="flex" gap={3}>
          <Text color="#9C9CBE">Terms</Text>
          <Text color="#9C9CBE">Privacy</Text>
          <Text color="#9C9CBE">Docs</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={3}
        sx={{ cursor: 'pointer' }}
      >
        <Box component="img" src="./static/twitter.svg" />
        <Box component="img" src="./static/github.svg" />
        <Box component="img" src="./static/discord.svg" />
      </Box>
    </FooterContainer>
  );
}
