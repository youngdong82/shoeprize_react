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
        width: 100vw;
        height: 100vh;
        margin: 0px;
    }
    .App {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
    }
    .App::-webkit-scrollbar {
        display: none;
    }
    h1{
        margin: 0px;
    }
    h2{
        margin: 0px;
    }
    p{
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
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
);
