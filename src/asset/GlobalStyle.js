import { createGlobalStyle } from 'styled-components';
import "./font/pretendardvariable.css"

const GlobalStyle = createGlobalStyle`
	  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard", "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 300;
  color: #333;
  }
`;

export default GlobalStyle;