import ReactDOM from 'react-dom/client';
import Providers from './Providers';
import Router from './routes/Router';
import "./asset/font/pretendardvariable.css"
import GlobalStyle from './asset/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
      <GlobalStyle/>
    <Router />
  </Providers>

);