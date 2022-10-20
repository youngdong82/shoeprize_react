import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import theme from './shared/theme'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Apple SD Gothic Neo';
    }
    body {
        margin: 0px;
    }
    body::-webkit-scrollbar {
        display: none;
    }
    .App {
        position: relative;
    }
    h1{
        margin: 0px;
    }
    h2{
        margin: 0px;
    }
    button {
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0px;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
