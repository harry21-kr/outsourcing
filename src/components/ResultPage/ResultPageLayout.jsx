import styled from 'styled-components';
import { Button } from '../../asset/button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../asset/font/pretendardvariable.css';
import imagePath from '../../asset/images/programming.png';
import PercentageTable from './PercentageTable';
import SharePage from './SharePage';

export default function ResultPageLayout({ jobPositions, isLoading }) {
  const location = useLocation();
  const { result } = location.state;
  const navigate = useNavigate();

  function handleRetakeTest() {
    navigate('/Survey');
  }

  return (
    <Wrap>
      <Title>
        <T26>입사를 축하합니다! 당신의 직군은</T26>
        <T48b>{ result }</T48b>
        <T20>당신은 사용자 인터페이스의 권위자 입니다</T20>
      </Title>
      <TitleImg src={imagePath} />

      <Section>
        <T28>한줄 설명이 들어갑니다 한줄 설명</T28>
        <T20>
          당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의
          권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자
          인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다 당신은 사용자 인터페이스의 권위자 입니다
          <ul>
            <li>{result} (멘트 추가)</li>
            <li>{result} (멘트 추가)</li>
            <li>{result} (멘트 추가)</li>
          </ul>
        </T20>
      </Section>

      <Section>
        <T28>영상으로 보는 직업</T28>
        <iframe
          width="520"
          height="285"
          src="https://www.youtube.com/embed/ceJMyCfYuwc?si=YfM3oO2emdozNLLn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Section>

      <PercentageTable jobPositions={jobPositions} isLoading={isLoading} />

      <Section>
        <SharePage />
        <Button onClick={handleRetakeTest}>테스트 다시하기</Button>
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
  margin-bottom: 40px;
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

//폰트
const T48b = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 52px;
  font-weight: 800;
  margin-bottom: 30px;
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
  color: #111827;
  margin-bottom: 14px;
`;

const T26 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #111827;
`;

const T22 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 22px;
  font-weight: 800;
  color: #111827;
`;

const T20 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 300;
  color: #4B5563;
`;

const T18 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 200;
  color: #A5A5A5;
`;
