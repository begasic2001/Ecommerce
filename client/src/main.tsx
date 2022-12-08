import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import './index.css';
import { theme } from './mui.style';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              autoHideDuration={3000}
              className="[&>*]:text-14"
            >
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <App />
              </LocalizationProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
