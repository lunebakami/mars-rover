import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: #778da9;
  }

  button {
    padding: 20px;
    background: #1b263b;
    color: #fff;
    font-weight: 600;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
  }

  input {
    margin-bottom: 10px;
    height: 25px;
    padding: 15px;
    border: 0;
    border-radius: 5px;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .App {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
  }

  .plateau-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    text-align: center;
    color: #fff;
  }
`;

export default GlobalStyle;
