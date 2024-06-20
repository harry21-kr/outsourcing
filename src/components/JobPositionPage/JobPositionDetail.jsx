import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { JOB_POSITION } from '../../constants';
import VideoDisplay from './VideoDisplay';

export default function JobPositionDetail() {
  const params = useParams();

  const { title, highlight, summary, detail, imgUrl, videoId } = useMemo(
    () => JOB_POSITION.filter((v) => v.position === params.position)[0],
    [params.position]
  );

  return (
    <>
      <TitleText>{title}</TitleText>
      <HighlightText>{highlight}</HighlightText>
      <PositionImage src={imgUrl} width={412} height={410} />
      <SummaryText>{summary}</SummaryText>
      <DetailText>{detail}</DetailText>
      <PositionVideoText>영상으로 보는 직업</PositionVideoText>
      <PositionVideoWrapper>
        <VideoDisplay videoId={videoId} width="100%" height="285px" />
      </PositionVideoWrapper>
    </>
  );
}

const TitleText = styled.h1`
  font-size: 62px;
  font-weight: bold;

  margin-bottom: 28px;
`;

const HighlightText = styled.h2`
  font-size: 24px;
  color: #4b5563;

  margin-bottom: 70px;
`;

const SummaryText = styled.h3`
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  text-align: start;

  margin-bottom: 14px;
`;

const DetailText = styled.p`
  width: 100%;
  font-size: 20px;
  color: #4b5563;

  margin-bottom: 70px;
`;

const PositionVideoText = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 28px;

  margin-bottom: 16px;
`;

const PositionVideoWrapper = styled.div`
  width: 100%;
  height: 285px;

  border-radius: 20px;
  background: black;

  overflow: hidden;
`;

const PositionImage = styled.img`
  background: black;

  margin-bottom: 80px;
`;
