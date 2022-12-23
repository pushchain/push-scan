import styled from 'styled-components';
import { AppBar, Toolbar } from '@mui/material';

const DRAWER_WIDTH = 100;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

export const RootStyle = styled(AppBar)(({ theme }) => ({
  position: 'static',
  width: '100%',
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: theme.default.bg,
}));

export const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  // [theme.breakpoints.up('lg')]: {
  //   minHeight: APPBAR_DESKTOP,
  //   //padding: theme.spacing(0, 6),
  // },
  // [theme.breakpoints.up('md')]: {
  //   minHeight: APPBAR_DESKTOP,
  //   //padding: theme.spacing(0, 6),
  // },
}));
