import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, Wrapper } from '~/styles/global.style';
import { theme } from '~/styles/theme.style';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <App />
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
