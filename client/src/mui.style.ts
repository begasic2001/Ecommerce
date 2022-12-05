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
      sm: 640, // Landscape Mobile
      md: 768, // Tablet
      lg: 1024, // Landscape Tablet
      xl: 1280, // Laptop
      xxl: 1536, // Desktop
    },
  },
});
