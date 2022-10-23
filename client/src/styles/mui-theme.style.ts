import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#f7f7f7',
    },
    warning: {
      main: '#f34f3f',
    },
    text: {
      primary: '#000',
      secondary: '#aaa',
    },
    background: {
      default: '#fff',
    },
  },
});
