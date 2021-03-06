import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
  }
`;
