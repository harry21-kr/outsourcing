import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ isOpen, setIsOpen }) => {
  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <Overlay onClick={closeSideBar}></Overlay>}
      <SidebarContainer isOpen={isOpen}>
        <SidebarList>
          <StyledFontAwesomeIcon onClick={closeSideBar} icon={faAnglesRight} />
          <SidebarItem>
            <SidebarLink href="/">IT 입사 테스트 하기</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="/job-position">IT 직군 알아보기</SidebarLink>
          </SidebarItem>
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default SideBar;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-300px')};
  width: 300px;
  /* height: 100%; */
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 1000;
  height: 100vh;
  /* overflow-y: auto; */
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarItem = styled.li`
  padding: 15px;
  margin-left: 20px;
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: black;
`;
