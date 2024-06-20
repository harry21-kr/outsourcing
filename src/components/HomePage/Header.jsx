import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';
import styled from 'styled-components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <div>
        <Logo src="" alt="로고 이미지" />
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} onClick={toggleSide} />
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
`;

const Logo = styled.img`
  height: 40px;
`;
