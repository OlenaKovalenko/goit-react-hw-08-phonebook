import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* background-image: linear-gradient(blue 0 20%, yellow 70% 100%); */
        background-image: url('/phonebook1.jpg');
        background-size: cover;
        background-position: center;
        /* background-color: rgb(245, 222, 179); */
        /* overflow: hidden; */
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;