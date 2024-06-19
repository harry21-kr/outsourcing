import { Container, Content, ImageContainer, MainImage, TextContainer, TestButton } from './HomePageLayout.style';
import mainImage from '../../../public/main.png';
import { useNavigate } from 'react-router-dom';

export default function HomePageLayout() {
  const navigate = useNavigate();
  const handleTestClick = () => {
    navigate('/survey'); // 이동할 페이지경로로 수정예정
  };
  return (
    <Container>
      <Content>
        <ImageContainer>
          <MainImage src={mainImage} alt="Main이미지" />
        </ImageContainer>
        <TextContainer>
          <h1>어느날 갑자기 IT 회사에 들어간 나</h1>
          <h2>어떤 IT 직업을 갖게 되었을까요?</h2>
          <p>성격별 IT직종 적합테스트</p>
        </TextContainer>
        <TestButton onClick={handleTestClick}>입사 테스트하기</TestButton>
      </Content>
    </Container>
  );
}
