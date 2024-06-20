import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import styled from 'styled-components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo onClick={handleLogoClick} src="" alt="로고 이미지" />
        <FontAwesomeIcon icon={faBars} onClick={toggleSide} />
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  width: 100%;
  min-width: 375px;
  max-width: 600px;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;
