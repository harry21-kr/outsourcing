import { styled } from 'styled-components';

export default function ResultPageLayout() {
  return (
    <Wrap>
    <Title>
  <FontH4>입사를 축하합니다! 당신의 직군은</FontH4>
  <FontH1>프론트엔드 개발자</FontH1>
    <div>당신은 사용자 인터페이스의 권위자 입니다</div>
    </Title>
    <TitleImg></TitleImg>
    <FontH5>당신은 사용자 인터페이스의 권위자 입니다</FontH5>
    <FontLetters>
    당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다
당신은 사용자 인터페이스의 권위자 입니다
    </FontLetters>
    </Wrap>
  );
}


//글자 폰트 정리하여 컴포넌트화 작업필요



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
const Title = styled.div`
  margin: 0 auto;
  text-align: center;

  
`

//폰트  letters

const TitleImg = styled.image`
      box-sizing: border-box;
    height: auto;
    max-width: 100%;
    vertical-align: bottom
`

const FontLetters = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #333;
`;
const FontH5 = styled.h5`
  font-size: 30px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;
const FontH4 = styled.h4`
  font-size: 24px;
  font-weight: 400;
  color: #333;
  margin-bottom: 20px;
`;

const FontH1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #222;
  margin: 0;
`;