import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Wrapper from "./../Routes";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none !important;
    font-family: 'Lexend Deca', sans-serif;
    letter-spacing: 1px;
    font-weight: 300;
    cursor: default;
    -ms-overflow-style: none; /* for IE, Edge */
    scrollbar-width: none; /* for Firefox */
    appearance: none;
    transition: all 200ms ease-in-out 0s;
  }
  ::-webkit-scrollbar {
    display: none;
    appearance: none;
  }
  *.hidden {
    display: none !important;
  }
  *.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  div.root {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper />
    </>
  );
}
