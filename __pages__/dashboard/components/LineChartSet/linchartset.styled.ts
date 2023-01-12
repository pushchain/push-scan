// External Library imports
import styled from 'styled-components';

export const Select = styled.div`
  position: relative;
  height: 48px;
  width: 237px;
  background-color: ${(props) => props?.background || '#cf1c84'};
  border: ${(props) => props.border || 'none'};
  border-radius: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 8px;
  color: ${(props) => props?.color || '#fff'};
  font-size: 15px;
  font-weight: 400;
  margin-right: ${(props) => props?.marginRight || '10px'};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    margin-bottom: 5px;
    width: ${(props) => props.width || '235px'};
  }
`;

export const OptionList = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.background.optionlist};
  border: 1px solid ${({ theme }) => theme.background.border};
  width: 261px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 5;
  padding: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 480px) {
    width: inherit;
  }
`;

export const Option = styled.div`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text.secondary};
  font-family: 'Strawford', Helvetica, sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.background.timeFilter};
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    width: inherit;
  }
`;

export const TimeFilterContainer = styled.div(
  ({ theme }) => `
  display:flex;
  height:42px;
  background-color:${theme.background.secondary};
  border-radius:16px;
  padding:5px;
  align-items:center;
  justify-content:space-between;
  @media (max-width: 480px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  `
);

export const TimeFilter = styled.button`
  border: none;
  background-color: ${(props) => props.background || '#cf1c84'};
  color: ${(props) => props.color || '#657795'};
  font-weight: ${(props) => props.fontWeight || '500'};
  font-family: 'Strawford', Helvetica, sans-serif;
  font-size: 15px;
  border-radius: 12px;
  min-width: 41px;
  height: 32px;
  padding: 5px;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
