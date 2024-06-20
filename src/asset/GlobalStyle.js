import { createGlobalStyle } from 'styled-components';
import "./font/pretendardvariable.css"

const GlobalStyle = createGlobalStyle`
	  *, *::before, *::after {
    box-sizing: border-box;
  }


  body {
    font-family: "Pretendard", "Helvetica", "Arial", sans-serif;;
  font-size: 20px;
  font-weight: 400;
  line-height: 148%;
  color: #4B5563;
  letter-spacing : -0.4px;
  }
`;

export default GlobalStyle;