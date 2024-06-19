import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import Providers from './Providers';
import Router from './routes/Router';
import "./asset/font/pretendardvariable.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <Router />
    <GlobalStyles />
  </Providers>
);
