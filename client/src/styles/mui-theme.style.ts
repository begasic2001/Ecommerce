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
      xs: 0, // Mobile
      sm: 576, // Landscape mobile
      md: 768, // Small tablet
      lg: 992, // Tablet
      xl: 1200, // Laptop, Large tablet
      xxl: 1400, // Desktop, Large laptop
    },
  },
});
