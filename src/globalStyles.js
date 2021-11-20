import {createGlobalStyle} from "styled-components";
import background from "./Images/background.jpg"

export const GlobalStyle = createGlobalStyle `
html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Nunito', sans-serif;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  body{
    margin: 0 auto;
    height: 100vh;
    max-width: 1000px;
    padding: 30px;
    background-image: url("${background}");
    background-position: center;
    background-size: cover;
  }
`
