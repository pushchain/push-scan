import styled from 'styled-components';
import { Container } from '@mui/system';
import { ItemVV2 } from '../../theme/SharedStyling';

export const DashBoardContainer = styled(ItemVV2)`
  width: 100%;
  height: auto;
  justify-content: flex-start;

  @media (min-width: 310px) {
    padding: 0px 24px !important;
  }
  @media (min-width: 1024px) {
    padding: 0px 50px !important;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.size || '15px'};
  font-weight: ${(props) => props.weight || 400};
  font-family: 'Strawford', Helvetica, sans-serif;
  color: ${(props) => props.color || props.theme.text.primary};
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
`;

export const HorizontalLine = styled.div(
  ({ theme }) => `
  display: none;
  height: 0px;
  border: 0.5px solid ${theme.background.timeFilter};
  width: 100%;
  margin: 0 auto;
  @media (max-width: 480px) {
    display: block;
  }
`
);
