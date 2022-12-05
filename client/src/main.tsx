import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { theme } from './mui.style';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <App />
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
