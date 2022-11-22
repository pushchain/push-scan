import styled from '@emotion/styled';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

export const DashBoardContainer = styled(Container)`
  width: 95vw;
  margin-top: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled(Typography)(({ theme, size, weight, color }) => ({
  margin: 0,
  fontSize: `${size || '16px'}`,
  fontWeight: `${weight || 500}`,
  color: `${color || theme.palette.text.primary}`,
}));

export const HorizontalLine = styled.div`
  display: none;
  height: 0px;
  border: 0.5px solid #e6e7ec;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 480px) {
    display: block;
  }
`;
