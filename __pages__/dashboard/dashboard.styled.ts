import styled from 'styled-components';
import { Container } from '@mui/system';

export const DashBoardContainer = styled(Container)`
  width: 100%;
  margin: 0px;
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

// export const Text = styled(Typography)(
//   ({ theme, size, weight, color, marginTop }: any) => ({
//     fontSize: `${size || '16px'}`,
//     fontWeight: `${weight || 400}`,
//     color: `${color || theme.default.color}`,
//     marginTop: `${marginTop || '0px'}`,
//   })
// );

export const Text = styled.p`
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.color || props.theme.default.color};
  margin-top: ${(props) => props.marginTop || '0px'};
`;

export const HorizontalLine = styled.div(
  ({ theme }) => `
  display: none;
  height: 0px;
  border: 0.5px solid ${theme.default.timeFilterBg};
  width: 100%;
  margin: 0 auto;
  @media (max-width: 480px) {
    display: block;
  }
`
);
