import styled from '@emotion/styled';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

export const DashBoardContainer = styled(Container)`
  width: 98%;
  margin-top: ${(props) => props.marginTop};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled(Typography)(
  ({ theme, size, weight, color, marginTop }) => ({
    // margin: 0,
    fontSize: `${size || '16px'}`,
    fontWeight: `${weight || 500}`,
    color: `${color || theme.palette.text.primary}`,
    marginTop: `${marginTop || '0px'}`,
  })
);

export const HorizontalLine = styled.div(
  ({ theme }) => `
  display: none;
  height: 0px;
  border: 0.5px solid ${theme.palette.background.paper};
  width: 100%;
  margin: 0 auto;
  @media (max-width: 480px) {
    display: block;
  }
`
);
