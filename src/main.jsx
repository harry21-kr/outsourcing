import ReactDOM from 'react-dom/client';
import Providers from './Providers';
import Router from './routes/Router';
import './asset/font/pretendardvariable.css';
import GlobalStyle from './asset/GlobalStyle.js';
import { StyledToastContainer } from './components/ResultPage/SharePage.style';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <GlobalStyle />
    <Router />
    <StyledToastContainer autoClose={3000} />
  </Providers>
);
