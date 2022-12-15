import styled from '@emotion/styled';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

export const DashBoardContainer = styled(Container)`
  width: 100%;
  margin: 0px;
  // margin-top: ${(props) => props.margintop};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    padding: 0px 24px !important;
  }
  @media (min-width: 1024px) {
    padding: 0px 50px !important;
  }
`;

export const Text = styled(Typography)(
  ({ theme, size, weight, color, marginTop }: any) => ({
    fontSize: `${size || '16px'}`,
    fontWeight: `${weight || 400}`,
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
