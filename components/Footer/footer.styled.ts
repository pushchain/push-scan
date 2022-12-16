import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  @media (max-width: 480px) {
    padding: 47px 24px 35px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 30px;
  }
  @media (min-width: 600px) {
    padding: 47px 24px 35px;
  }
  @media (min-width: 1080px) {
    padding: 47px 50px 35px;
  }
`;
