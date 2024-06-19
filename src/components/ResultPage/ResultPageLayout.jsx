import styled from 'styled-components';
import "../../asset/font/pretendardvariable.css";
import imagePath from '../../asset/images/programming.png';
import { Button } from '../../asset/button/Button';

export default function ResultPageLayout() {
  return (
    <Wrap>
      <Title>
        <T28>입사를 축하합니다! 당신의 직군은</T28>
        <T48b>프론트엔드 개발자</T48b>
        <T20>당신은 사용자 인터페이스의 권위자 입니다</T20>
      </Title>
      <TitleImg src={imagePath} />
      
      <Section>
      <T28>한줄 설명이 들어갑니다 한줄 설명</T28>
      <T20>
        당신은 사용자 인터페이스의 권위자 입니다 당신은 
        사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자
         입니다
        당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 
        인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다
        당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 
        인터페이스의 권위자 입니다
        <ul>
          <li>프론트엔드는 이런일을해요1</li>
          <li>프론트엔드는 이런일을해요2</li>
          <li>프론트엔드는 이런일을해요3</li>
        </ul>
      </T20>
      </Section>

      <Section>
      <T28>영상으로 보는 직업</T28>
      <iframe width="520" height="285" src="https://www.youtube.com/embed/ceJMyCfYuwc?si=YfM3oO2emdozNLLn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Section>

      <Section>
      <T28>가장 많이 나온 직업 TOP3</T28>
      
      </Section>
      <Section>
        <Button variant="fill">결과 공유하기</Button>
        <Button > 테스트 다시하기 </Button>
      </Section>
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

const Section = styled.div`
  margin: 0 auto;
  margin-bottom: 70px;
  display: block;
`;

//

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
  display: block;
`;

const TitleImg = styled.img`
  box-sizing: border-box;
  height: auto;
  max-width: 100%;
  vertical-align: bottom;
  margin-bottom: 70px;
`;


//버튼

const BtnMiddleFill = styled.img`
  max-width: 520px;
  height: 76px;
  
`;


//폰트 > 나중에 정리 하여 컴포넌트화 or 글로벌스타일 의논하여 상의
const T48b = styled.span`
 display: block;
  font-family: 'Pretendard';
  font-size: 48px;
  font-weight: 800;
  color: #111827;
`;

const T36 = styled.span`
 display: block;
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 400;
  color: #333;
`;

const T28 = styled.span`
 display: block;
  font-family: 'Pretendard';
  font-size: 28px;
  font-weight: 700;
  color: #222;
  margin-bottom: 14px;
`;

const T26 = styled.span`
 display: block;
  font-family: 'Pretendard';
  font-size: 26px;
  font-weight: 700;
  color: #222;
`;

const T22 = styled.span`
 display: block;
  font-family: 'Pretendard';
  font-size: 22px;
  font-weight: 800;
  color: #222;
`;

const T20 = styled.span`
 display: block;
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 300;
  color: #333;
`;

const T18 = styled.span`
 display: block;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 200;
  color: #333;
`;
