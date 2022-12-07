import styled from '@emotion/styled';
import { Container } from '@mui/system';

export const FooterContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 47px 10px 35px 10px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 30px;
  }
`;
