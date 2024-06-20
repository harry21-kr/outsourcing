import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../asset/button/Button';
import supabaseClient from '../../supabase/supabaseClient';

function SurveyPageLayout() {
  const questions = [
    '입사하여 첫 프로젝트에 참여하게 된 나. 팀에서 어떤 작업을 맡고 싶나요?',
    '나는 프로젝트를 진행하기 위해 어떤 도구를 사용할까요?',
    '새로운 프로젝트를 시작하기 전 가장 먼저 어떤 일을 할까요?',
    '프로젝트에 참여하게 되었습니다! 어떤 부분을 가장 신경 쓰며 진행해볼까요?',
    '프로젝트 도중 문제가 생겼습니다. 어떤 방식으로 문제를 해결해볼까요?',
    '중간 평가에서 피드백을 받았습니다. 가장 신경 쓰이는 피드백은 무엇인가요?',
    '프로젝트가 끝난 후 피드백을 받았습니다. 어떤 칭찬에 가장 기분이 좋았을까요?'
  ];

  const options = [
    [
      '1. 새로운 아이디어를 생각해내기',
      '2. 팀과 소통하며 프로젝트를 관리하기',
      '3. 멋진 디자인으로 프로젝트를 꾸미기',
      '4. 유저가 편하게 쓸 수 있게 화면을 디자인하기',
      '5. 페이지를 코딩으로 구현하기',
      '6. 유저의 정보를 기록하고 관리하기'
    ],
    [
      '1. 아이디어 정리하는 노트',
      '2. 프로젝트 관리 어플리케이션(Trello, Jira, Notion)',
      '3. 디자인 툴(Figma, Miro, Sketch)',
      '4. 코드 에디터(Visual Studio Code, WebStorm) ',
      '5. 프로토타이핑 툴(Pixso, Adobe XD, 스케치)',
      '6. 서버 관리 도구'
    ],
    [
      '1. 시장 조사',
      '2. 일정 계획 수립',
      '3. 디자인 스케치',
      '4. 사용자 요구사항 정리',
      '5. 초기 페이지 코딩',
      '6. 데이터 베이스 설계'
    ],
    [
      '1. 사업의 시장 조사와 기획',
      '2. 팀의 조화와 일정 관리',
      '3. 제품의 아름다움',
      '4. 사용자의 편의성',
      '5. 웹 페이지의 정확한 작동',
      '6. 서버의 안정성'
    ],
    [
      '1. 아이디어 회의를 통해 해결책 찾기',
      '2. 계획을 다시 세워 해결 방안 모색',
      '3. 새로운 화면 구조 디자인하기',
      '4. 사용자의 의견을 듣고 적용해보기',
      '5. 프로젝트의 알고리즘 다시 보기',
      '6. 데이터 분석을 통해 문제를 살펴보기'
    ],
    [
      '1. 아이디어가 더 참신했으면 좋겠다는 의견',
      '2. 일정 관리가 미흡하다는 지적',
      '3. 디자인이 더 세련되었으면 좋겠다는 피드백',
      '4. 사용자 편의성이 떨어진다는 불만',
      '5. 코드에 오류가 많다는 지적',
      '6. 서버가 불안정하다는 평가'
    ],
    [
      '1. 아이디어가 너무 좋다는 사업주의 칭찬',
      '2. 프로젝트 진행이 매끄러워 일하기 좋았다는 칭찬',
      '3. 화면이 예뻐서 자주보게 된다는 사용자의 칭찬',
      '4. 사이트가 사용하기에 너무 편하다는 SNS의 글',
      '5. 작동방식이 매끄러워 사용하기 좋다는 커뮤니티의 글',
      '6. 보안을 믿고 사용할 수 있다는 웹상의 글'
    ]
  ];

  const randomDecimals = [1.1, 1.01, 1.001, 1.0001, 1.00001, 1.000001, 1.0000001];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(7);
  const [optionScores, setOptionScores] = useState(Array(6).fill(0));
  const navigate = useNavigate();

  async function handleOptionClick(optionIndex) {
    const newOptionScores = [...optionScores];
    newOptionScores[optionIndex] += randomDecimals[currentQuestionIndex];
    setOptionScores(newOptionScores);

    setSelectedOption(optionIndex);
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setProgress(((currentQuestionIndex + 2) / questions.length) * 100);
        setSelectedOption(null);
      }, 300);
    }
  }

  async function handleBackClick() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setProgress((currentQuestionIndex / questions.length) * 100);
      setSelectedOption(null);
    } else {
      navigate('/');
    }
  }

  async function handleResultClick() {
    const maxScoreIndex = optionScores.indexOf(Math.max(...optionScores));
    const roles = [
      'service_planner',
      'product_manager',
      'product_designer',
      'ui_ux_designer',
      'frontend_developer',
      'backend_developer'
    ];
    const result = roles[maxScoreIndex];

    const { data, error } = await supabaseClient.from('JOB_POSITION').select('counter').eq('type', result);

    if (error) {
      console.error('Error fetching data:', error.message);
      return;
    }

    if (data && data.length > 0) {
      const { counter } = data[0];
      const { error: updateError } = await supabaseClient
        .from('JOB_POSITION')
        .update({ counter: counter + 1 })
        .eq('type', result);

      if (updateError) {
        console.error('Error updating counter:', updateError.message);
      } else {
        console.log('Counter updated successfully', result);
      }
    } else {
      console.error('No data found :', result);
    }

    navigate(`/result/${result}`, { state: { result } });
  }

  return (
    <>
      <Header>
        <BackButton onClick={handleBackClick} style={{ fontSize: '16px', color: '#c7c7c7' }}>
          Back
        </BackButton>
        <Counter>
          {currentQuestionIndex + 1} / {questions.length}
        </Counter>
      </Header>
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
      <Question>{questions[currentQuestionIndex]}</Question>
      <Options>
        {options[currentQuestionIndex].map((option, index) => (
          <Button
            variant="choice"
            key={index}
            onClick={() => handleOptionClick(index)}
            selected={selectedOption === index}
          >
            {option}
          </Button>
        ))}
      </Options>
      {currentQuestionIndex === questions.length - 1 && selectedOption !== null && (
        <Button variant="fill" style={{ marginTop: '20px' }} onClick={handleResultClick}>
          결과 보러가기
        </Button>
      )}
    </>
  );
}

export default SurveyPageLayout;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: px;
`;

const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  border-radius: 20px;
  background-color: #5a6afb;
  transition: width 0.5s ease-in-out;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Counter = styled.div`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: #5a6afb;
`;

const Question = styled.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
  color: #333;
  line-height: 120%;
  letter-spacing: -0.4px;
  margin-bottom: 50px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const T24 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: #5a6afb;
`;

const T36 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
  color: #333;
  line-height: 120%;
  letter-spacing: -0.4px;
  margin-bottom: 54px;
`;
