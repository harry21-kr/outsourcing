import { Container, CenterTitle, Content, ImageContainer, MainImage, SubTitle } from './HomePageLayout.style';
import mainImage from '../../../src/asset/images/programming.png';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../asset/button/Button';

export default function HomePageLayout() {
  const navigate = useNavigate();
  const handleTestClick = () => {
    navigate('/survey');
  };
  return (
    <Container>
      <Content>
        <ImageContainer>
          <MainImage src={mainImage} alt="Main이미지" />
        </ImageContainer>
        <SubTitle>어느날 갑자기 IT 회사에 들어간 나</SubTitle>
        <CenterTitle>어떤 IT 직업을</CenterTitle>
        <CenterTitle>갖게 되었을까요?</CenterTitle>
        <SubTitle>성격별 IT직종 적합테스트</SubTitle>
        <Button variant="fill" onClick={handleTestClick}>
          입사 테스트하기
        </Button>
      </Content>
    </Container>
  );
}
