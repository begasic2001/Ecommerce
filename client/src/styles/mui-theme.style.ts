import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
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
      sm: 576, // Mobile
      md: 768, // Landscape mobile
      lg: 992, // Tablet
      xl: 1200, // Laptop, Large tablet
      xxl: 1400, // Desktop, Large laptop
    },
  },
});
