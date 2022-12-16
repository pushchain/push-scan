// Define what props.theme will look like
export const themeLight = {
  scheme: 'light',

  // Default Theme
  default: {
    bg: '#FFFFFF',
    secondaryBg: '#F4F5FA',
    border: '#BAC4D6',
    color: '#000000',
    leaderBoardHeader: '#657795',
    secondaryColor: '#657795',
    lineGraph: '#DF4FA3',
    footerLinkText: '#9C9CBE',
    tooltipBackground: '#E5E8F6',
    timeFilterBg: '#F4F5FA',
    cardBg: '#FFFFFF',
  },

  // Default Background Theme
  defaultBG: '#FFFFFF',

  headerIconsBg: '#FFFFFF',
};

export const themeDark = {
  scheme: 'dark',

  // Default Theme
  default: {
    bg: '#2F3137',
    secondaryBg: '#404650',
    border: '#4A4F67',
    color: '#FFFFFF',
    leaderBoardHeader: '#787E99',
    secondaryColor: '#B6BCD6',
    lineGraph: '#DF4FA3',
    footerLinkText: '#B6BCD6',
    tooltipBackground: '#2F3137',
    timeFilterBg: '#404650',
    cardBg: '#404650',
  },

  // Default Background Theme
  defaultBG: '#2F3137',

  headerIconsBg: '#282A2E',
};

/*
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: any, color2: any) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
  lighter: '#E52F71',
  light: '#76B0F1',
  main: '#E52F71',
  dark: '#fff',
  darker: '#fff',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
};

const INFO = {
  lighter: 'rgb(103, 76, 159)',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#fff',
  darker: '#fff',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#860486',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#fff',
  darker: '#fff',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#3EC3ED',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#fff',
  darker: '#fff',
  contrastText: '#fff',
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#860486', 'rgb(103, 76, 159)', '#D0AEFF', '#F7D2FF'],
  blue: ['#3EC3ED', '#83CFFF', '#A5F3FF', '#CCFAFF', '#7A1E81'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#860486', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const OUTLINES = ['#BAC4D6', '#4A4F67'];

export const lightPalette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  outline: OUTLINES[0],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: {
    paper: '#EFEFEF',
    default: '#FFFFFF',
    neutral: GREY[200],
    card: 'transparent',
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export const darkPalette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  outline: OUTLINES[1],
  text: { primary: GREY[0], secondary: GREY[400], disabled: GREY[500] },
  background: {
    paper: '#3E4C59',
    default: '#2F3137',
    neutral: GREY[200],
    card: '#404650',
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};
*/
