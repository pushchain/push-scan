import styled from 'styled-components';

export const Select = styled.div`
  position: relative;
  height: 48px;
  width: 237px;
  background-color: ${(props) => props?.background || '#cf1c84'};
  border: 1px solid ${(props) => props?.border || '#657795'};
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

export const OptionList = styled.div(
  ({ theme, background }) => `
  position: absolute;
  top: 50px;
  left: 0px;
  border-radius: 20px;
  background-color: ${background ? background : theme.background.default};
  border: 1px solid grey;
  width: inherit;
  overflow-x:hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 5;
  padding: 10px;
  &::-webkit-scrollbar{
    display:none;
  }
  `
);

export const Option = styled.div`
  width: inherit;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  &:hover {
    opacity: 0.8;
  }
  // @media (max-width: 480px) {
  //   justify-content: center;
  // }
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
  font-size: 15px;
  border-radius: 12px;
  min-width: 40px;
  height: 32px;
  padding: 5px;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
