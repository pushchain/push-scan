import styled from "@emotion/styled";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

export const DashBoardContainer = styled(Container)`
  margin-top: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled(Typography)(({ theme, size, weight, color }) => ({
  margin: 0,
  fontSize: `${size || "16px"}`,
  fontWeight: `${weight || 500}`,
  color: `${color || theme.palette.text.primary}`,
}));
