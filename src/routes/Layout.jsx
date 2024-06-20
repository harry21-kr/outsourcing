import { Outlet } from 'react-router-dom';
import Header from '../components/HomePage/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
