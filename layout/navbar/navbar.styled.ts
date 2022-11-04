import { styled } from "@mui/material";
import { AppBar, Toolbar, ListItemIcon, ListItemButton } from "@mui/material";

const DRAWER_WIDTH = 100;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

export const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: theme.palette.background.default,
}));

export const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));
