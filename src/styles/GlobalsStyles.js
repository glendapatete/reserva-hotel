import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: helvetica neue,Helvetica,Arial,sans-serif;
  }

  body {
    margin: 0;
    font-size: 14px;
    padding: 0px;
    @media screen and (min-width: 1024px) {
      padding: 0px 80px;
    }
  }


  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;
  }


  ul, li, a, ol {
    margin: 0;
    list-style-type: none;
    padding: 0;
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
