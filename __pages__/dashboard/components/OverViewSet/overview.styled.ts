import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

export const OverviewItem = styled.div`
  border-radius: 28px;
  border: 1px solid #bac4d6;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 114px;
  min-width: 270px;
  @media (max-width: 480px) {
    margin-bottom: 10px;
    width: 100%;
  }
`;
