import styled from 'styled-components';
import JobPositionSummary from './JobPositionSummary';

export default function JobPositionPageLayout() {
  return (
    <Wrap>
      <JobPositionSummary />
    </Wrap>
  );
}

const Wrap = styled.main`
  width: 100%;
  max-width: 600px;
  min-height: calc(100vh - 50px);

  margin: 25px auto;
  padding: 0px 40px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: white;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.12));
`;
