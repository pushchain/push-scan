import styled from "@emotion/styled";
import { Container } from "@mui/system";

export const DashBoardContainer = styled(Container)`
  margin-top: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Select = styled.div`
  position: relative;
  height: 48px;
  width: 235px;
  background-color: ${(props) => props?.background || "#cf1c84"};
  border: 1px solid ${(props) => props?.border || "#657795"};
  border-radius: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 10px;
  color: ${(props) => props?.color || "#fff"};
  font-size: 18px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 390px) {
    margin-bottom: 5px;
  }
`;

export const OptionList = styled.div(
  ({ theme, background }) => `
  position: absolute;
  top: 50px;
  left: 0px;
  border-radius: 20px;
  background-color: ${
    background ? background : theme.palette.background.default
  };
  border: 1px solid grey;
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 5;
  padding: 10px;
  `
);

export const Option = styled.div`
  width: inherit;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  // &:hover {
  //   padding: 5px 0px;
  //   border-radius: 20px;
  //   background-color: black;
  // }
`;
