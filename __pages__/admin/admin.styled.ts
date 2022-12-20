import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog } from '@mui/material';
import { Container } from '@mui/system';
import { ItemHV2, ItemVV2, SpanV2 } from '../../theme/SharedStyling';

export const AdminContainer = styled(Container)`
  width: 100%;
  margin-top: 20px;
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

export const StyledEditIcon = styled(EditIcon)`
  position: absolute;
  top: 40px;
  right: 35px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  padding: 8px;
  background: transparent;
  border-radius: 50%;
  transition: 500ms;

  &:hover {
    background: gray;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const StyledDialog = styled(Dialog)`
  overflow: auto;
  & > div {
    & > div {
      box-shadow: none;
      &::-webkit-scrollbar {
        width: 0px;
        background-color: transparent;
        border-radius: 5px;
      },
      &::-webkit-scrollbar-thumb {
        background-color: #CF1C84;
        border-radius: 5px;
      },
    }
  }
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.background.border};
  outline: none;
  border-radius: 10px;
  font-size: 18px;
  padding: 15px 10px;
  margin: 5px 0px;
  background-color: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.text.primary};
`;

export const InputContainer = styled(ItemVV2)`
  max-height: 450px;
  // width: 50%;
  overflow-y: auto;
`;

export const FormContainer = styled(ItemHV2)`
  width: 100%;
  margin: 10px 0px;
  border: 1px solid ${(props) => props.theme.background.border};
  padding: 10px;
  border-radius: 28px;
`;

export const Button = styled.button`
  padding: ${(props) => props.padding || '8px 15px'};
  font-size: ${(props) => props.fontSize || '15px'};
  border: 1px solid ${(props) => props.theme.background.border};
  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) =>
    props.background || props.theme.background.secondary};
  border-radius: 10px;
  cursor: pointer;
  margin: ${(props) => props.margin || '0px'};
  &:hover {
    background-color: ${(props) =>
      props.hoverColor || props.theme.background.border};
  }
`;

export const InfoContent = styled(SpanV2)`
  padding: 10px 0px;
  color: ${(props) => props.theme.text.primary};
`;

export const InfoHeader = styled(SpanV2)`
  padding: 10px 0px;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.text.primary};
`;

export const InfoContainer = styled(ItemVV2)`
  align-items: flex-start;
  padding: 0px 0px 0px 40px;
`;
