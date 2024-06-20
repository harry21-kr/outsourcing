import { Outlet } from 'react-router-dom';
import Header from '../components/HomePage/Header';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  margin: auto;
  max-width: 600px;
  height: 100vh;
`;
