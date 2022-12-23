import React from 'react';
import { ROUTES } from '../../utils/constants';
import { useRouter } from 'next/router';
import { ItemHV2, ButtonV2 } from '../../theme/SharedStyling';
import styled from 'styled-components';

export const NavBarButtons = ({ logout, isLoggedIn }) => {
  const router = useRouter();
  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          router.push(ROUTES.DASHBOARD);
        }}
      >
        Dashboard
      </Button>
      <Button onClick={() => router.push(ROUTES.ADMIN)}>Admin Panel</Button>
      {isLoggedIn ? <Button onClick={() => logout()}>Logout</Button> : null}
    </ButtonContainer>
  );
};

const ButtonContainer = styled(ItemHV2)`
  justify-content: flex-end;
`;

const Button = styled(ButtonV2)`
  max-width: 140px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Strawford', Helvetica, sans-serif;
  border-radius: 10px;
  padding: 10px 10px;
  type: submit;
  background: ${(props) => props.theme.background.default};
  border: 1px solid #df4fa3;
  color: ${(props) => props.theme.text.primary};
  margin-right: 10px;
`;
