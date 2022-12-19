import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog } from '@mui/material';
import { Container } from '@mui/system';

export const AdminContainer = styled(Container)`
  margin-top: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
