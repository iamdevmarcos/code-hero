import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #E5E5E5;
    --background-white:#fff;

    --text-title: #555;
  }

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    background: var(--background);
  }
`;
