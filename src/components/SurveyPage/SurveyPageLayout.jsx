import styled from 'styled-components';
import { Button } from '../../asset/button/Button';
import { useState } from 'react';

export default function SurveyPageLayout() {
  const [progressValue, setProgressValue] = useState(0);

  const increaseProgress = () => {
    setProgressValue((prevValue) => (prevValue < 10 ? prevValue + 1 : 10));
  };

  return (
    <Wrap>
      <ProgressArea>
      <T24>{progressValue}</T24>
        <StyledProgress max="10" value={progressValue}  className="bar-progress"></StyledProgress>
        </ProgressArea>
      <T36>
      김밥천국에서 <br/>
      <span style={{FontWeight: "700"}}>김밥과 잘 어울리는 메뉴는?</span>
      </T36>
      <Button variant="choice" onClick={increaseProgress}> <PointNumber>1</PointNumber> 질문이 들어갑니다</Button>
      <Button variant="choice" onClick={increaseProgress}> <PointNumber>2</PointNumber> 질문이 들어갑니다</Button>
      <Button variant="choice" onClick={increaseProgress}> <PointNumber>3</PointNumber> 질문이 들어갑니다</Button>
      <Button variant="choice" onClick={increaseProgress}> <PointNumber>4</PointNumber> 질문이 들어갑니다</Button>
      <Button variant="choice" onClick={increaseProgress}> <PointNumber>5</PointNumber> 질문이 들어갑니다</Button>
      <Button variant="choice" onClick={increaseProgress}> <PointNumber>6</PointNumber> 질문이 들어갑니다</Button>
    
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
  background: white;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`;

const ProgressArea = styled.div`
  margin-top: 24px;
  margin-bottom: 28px;
`;

const StyledProgress = styled.progress`
  width: 100%;
  height: 12px;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-progress-bar {
    border-radius: 20px;
    background-color: #EFEFEF;
  }
  &::-webkit-progress-value {
    border-radius: 20px;
    background-color: #5A6AFB;
  }
`;

const T24 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: #5A6AFB;
`;

const T36 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
  color: #333;
  line-height: 120%;
  letter-spacing : -0.4px;
  margin-bottom: 54px;
`;

const PointNumber = styled.span`
width: 26px;
height: 26px;
font-size: 18px;
background-color: #E1E4FE;
border-radius: 30px;
margin-right: 14px;
display: flex;
  align-items: center;
  justify-content: center;
`;