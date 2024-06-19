import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import supabaseClient from '../../supabase/supabaseClient'; // Supabase 클라이언트 가져오기

function SurveyPageLayout() {
  const questions = [
    '입사하여 첫 프로젝트에 참여가게 된 나는 팀에서 어떤 작업을 맡고 싶나요?',
    '나는 프로젝트를 진행하기 위해 어떤 도구를 사용할까요?',
    '새로운 프로젝트를 시작하기 전 가장 먼저 어떤 일을 할까요?',
    '드디어 프로젝트에 참여하게 되었습니다! 어떤 부분을 가장 신경 쓰며 진행해볼까요?',
    '프로젝트를 진행하던 도중 문제가 생겼습니다. 어떤 방식으로 문제를 해결해볼까요?',
    '프로젝트의 중간 평가에서 피드백을 받았습니다. 가장 신경 쓰이는 피드백은 무엇인가요?',
    '프로젝트가 끝난 후 피드백을 받았습니다. 어떤 칭찬에 가장 기분이 좋았을까요?'
  ];

  const options = [
    [
      '새로운 아이디어를 생각해내기',
      '팀과 소통하며 프로젝트를 관리하기',
      '멋진 디자인으로 프로젝트를 꾸미기',
      '유저가 편하게 쓸 수 있게 화면을 디자인하기',
      '페이지를 코딩으로 구현하기',
      '유저의 정보를 기록하고 관리하기'
    ],
    [
      '아이디어 정리하는 노트',
      '프로젝트 관리 어플리케이션(Trello, Jira, Notion)',
      '디자인 툴(Figma, Miro, Sketch)',
      '코드 에디터(Visual Studio Code, WebStorm) ',
      '프로토타이핑 툴(Pixso, Adobe XD, 스케치)',
      '서버 관리 도구'
    ],
    ['시장 조사', '일정 계획 수립', '디자인 스케치', '사용자 요구사항 정리', '초기 페이지 코딩', '데이터 베이스 설계'],
    [
      '사업의 시장 조사와 기획',
      '팀의 조화와 일정 관리',
      '제품의 아름다움',
      '사용자의 편의성',
      '웹 페이지의 정확한 작동',
      '서버의 안정성'
    ],
    [
      '아이디어 회의를 통해 해결책 찾기',
      '계획을 다시 세워 해결 방안 모색',
      '새로운 화면 구조 디자인하기',
      '사용자의 의견을 듣고 적용해보기',
      '프로젝트의 알고리즘 다시 보기',
      '데이터 분석을 통해 문제를 살펴보기'
    ],
    [
      '아이디어가 더 참신했으면 좋겠다는 의견',
      '일정 관리가 미흡하다는 지적',
      '디자인이 더 세련되었으면 좋겠다는 피드백',
      '사용자 편의성이 떨어진다는 불만',
      '코드에 오류가 많다는 지적',
      '서버가 불안정하다는 평가'
    ],
    [
      '새로운 아이디어가 떠올랐을 때',
      '프로젝트가 성공적으로 완료될 때',
      '멋진 디자인이 완성됐을 때',
      '제품이 잘 작동할 때',
      '유저가 데이터를 잘 입력할 때',
      '서버가 잘 운영될 때'
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
      '서비스 기획자',
      '프로덕트 기획자',
      '프로덕트 디자이너',
      'UI/UX 디자이너',
      '프론트엔드 개발자',
      '백엔드 개발자'
    ];
    const result = roles[maxScoreIndex];
  
    const { data, error } = await supabaseClient
      .from('JOB_POSITION')
      .select('counter')
      .eq('type_name', result);
  
    if (error) {
      console.error('Error fetching data:', error.message);
      return;
    }
  
    if (data && data.length > 0) {
      const { counter } = data[0];
      const { error: updateError } = await supabaseClient
        .from('JOB_POSITION')
        .update({ counter: counter + 1 })
        .eq('type_name', result);
  
      if (updateError) {
        console.error('Error updating counter:', updateError.message);
      } else {
        console.log('Counter updated successfully', result);
      }
    } else {
      console.error('No data found :', result);
    }
  
    navigate('/result', { state: { result } });
  }
  

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackClick}>←</BackButton>
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
          <OptionButton key={index} onClick={() => handleOptionClick(index)} selected={selectedOption === index}>
            {option}
          </OptionButton>
        ))}
      </Options>
      {currentQuestionIndex === questions.length - 1 && selectedOption !== null && (
        <ResultButton onClick={handleResultClick}>결과 보러가기</ResultButton>
      )}
    </Container>
  );
}

export default SurveyPageLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  height: 100vh;
  max-width: 600px;
  margin: auto;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #4cb0f3;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Counter = styled.div`
  font-size: 16px;
`;

const Question = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const OptionButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#4cb0f3' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  box-shadow: ${(props) => (props.selected ? '0px 0px 10px rgba(0, 0, 0, 0.2)' : 'none')};
  transition: background-color 0.2s;
`;

const ResultButton = styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4cb0f3;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s;
`;
