import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SideBar from './SiderBar';
import styled from 'styled-components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  const goBack = () => {
    navigate(-1);
  };

  const renderLeftContent = () => {
    if (location.pathname === '/survey') {
      return <FontAwesomeIcon onClick={goBack} icon={faAngleLeft} />;
    }
    return <Logo src="" alt="로고 이미지" />;
  };

  return (
    <HeaderContainer>
      <div>{renderLeftContent()}</div>
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
