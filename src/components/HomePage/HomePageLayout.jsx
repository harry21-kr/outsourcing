import { Content, ImageContainer, MainImage, TextContainer } from './HomePageLayout.style';
import programming from '../../../src/asset/images/programming.png';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../asset/button/Button';
import styled from 'styled-components';

export default function HomePageLayout() {
  const navigate = useNavigate();
  const handleTestClick = () => {
    navigate('/survey'); // 이동할 페이지경로로 수정예정
  };
  return (
    <Wrap>
      <Content>
        <ImageContainer>
          <MainImage style={{height:"300px", width:"300px"}} src={programming} alt="Main이미지" />
        </ImageContainer>
        <TextContainer>
          <T26>어느날 갑자기 IT 회사에 들어간 나</T26>
          <T48b>어떤 IT 직업을 <br/>
            갖게 되었을까요?</T48b>
          <p>성격별 IT직종 적합테스트</p>
        </TextContainer>
        <Button  variant="fill" onClick={handleTestClick}>입사 테스트하기</Button>
      </Content>
    </Wrap>
  );
}

const Wrap = styled.main`
  width: 100%;
  min-width: 375px;
  max-width: 600px;
  min-height: calc(100vh - 50px);
  margin: 25px auto;
  padding: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`;

const T48b = styled.span`
  font-family: 'Pretendard';
  font-size: 48px;
  font-weight: 800;
  color: #111827;
  margin-bottom: 40px;
  line-height: 110%;
  letter-spacing : -2px;
`;
const T26 = styled.span`
 display: block;
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 10px;
`;