// External Library imports
import styled from 'styled-components';

export const OverviewItem = styled.div`
  border-radius: 28px;
  padding: ${props => props.padding || '25px 30px 22px 40px'};
  display: flex;
  flex: 1 1 0;
  justify-content: space-between;
  align-items: center;
  height: 114px;
  min-width: 285px;
  @media (max-width: 480px) {
    margin-bottom: 0px;
    width: 100%;
  }
`;
