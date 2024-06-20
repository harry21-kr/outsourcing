import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: "Pretendard", "Helvetica", "Arial", sans-serif;;
        font-size: 20px;
        font-weight: 400;
        color: #4B5563;
    }
`;

export default GlobalStyles;
