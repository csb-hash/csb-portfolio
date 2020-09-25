import { createGlobalStyle } from "styled-components"
import normalize from "normalize.css"
import { getTextColor, getBackground } from "../utils/colors"

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body, 
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }


  body {
    background-color: ${getBackground};
    font-family: 'Montserrat', sans-serif;
    color: ${getTextColor};
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    transition: 0.5s;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.5s;
  }

  .menu-background {
    background: ${getTextColor};
  }
`

export default GlobalStyles
