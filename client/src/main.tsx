import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '~/styles/main.scss';
import { theme } from '~/styles/mui-theme.style';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <section className="global-theme">
            <App />
          </section>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
