import styled from 'styled-components';
import JobPositionItem from './JobPositionItem';

const JOB_POSITION = [
  {
    title: '프론트엔드 개발자',
    summary: '프론트엔드에 대한 한 줄 요약',
    label: '개발'
  },

  {
    title: '백엔드 개발자',
    summary: '백엔드에 대한 한 줄 요약',
    label: '개발'
  },
  {
    title: 'UI 디자이너',
    summary: 'UI 디자이너에 대한 한 줄 요약',
    label: '디자인'
  },
  {
    title: '프로덕트 디자이너',
    summary: '프로덕트 디자이너에 대한 한 줄 요약',
    label: '디자인'
  },
  {
    title: '서비스 기획자',
    summary: '서비스 기획자에 대한 한 줄 요약',
    label: '기획'
  },
  {
    title: '프로덕트 매니저',
    summary: '프로덕트 매니저에 대한 한 줄 요약',
    label: '기획'
  }
];

export default function JobPositionList() {
  return (
    <JobPositionListWrap>
      {JOB_POSITION.map((item) => (
        <JobPositionItem key={item.title} item={item} />
      ))}
    </JobPositionListWrap>
  );
}

const JobPositionListWrap = styled.ul`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
