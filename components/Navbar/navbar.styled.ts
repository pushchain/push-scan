// External Library imports
import styled from 'styled-components';

// Internal Components imports
import { ItemHV2, ItemVV2 } from '../../components/SharedStyling';

export const NavbarContainer = styled(ItemHV2)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 50px;
  height: 100px;
  position: static;
  z-index: 10;
  @media (min-width: 310px) {
    padding: 0px 24px;
  }
  @media (min-width: 1024px) {
    padding: 0px 70px;
  }
`;
export const HamburgerLine = styled.div`
  height: 1px;
  width: 30px;
  border-bottom: 3px solid ${(props) => props.theme.text.primary};
  border-radius: 3px;
  margin: 5px 0px;
`;

export const SidebarContainer = styled(ItemVV2)`
  z-index: 10;
  justify-content: space-between;
  align-items: flex-start;
  width: 250px;
  height: auto;
  position: absolute;
  top: 95px;
  border: 1px solid ${(props) => props.theme.background.border};
  border-radius: 28px;
  color: ${(props) => props.theme.text.secondary};
  background-color: ${(props) => props.theme.background.secondary};
  padding: 30px;
  @media (min-width: 310px) {
    right: 24px;
  }
  @media (min-width: 768px) {
    right: 50px;
  }
`;
