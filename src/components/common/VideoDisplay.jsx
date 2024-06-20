import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import SkeletonBox from './ui/Box';
const VideoContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || '520px'};
  height: ${(props) => props.height || '285px'};
`;

function VideoDisplay({ videoId, width = '520px', height = '285px' }) {
  const [isLoading, setIsLoading] = useState(true); // 비디오 로딩 상태 관리

  return (
    <VideoContainer width={width} height={height}>
      {' '}
      {/* 비디오와 Skeleton을 동일한 위치에 배치하기 위한 컨테이너 */}
      {isLoading && <SkeletonBox />} {/* 비디오 로딩 중일 때 SkeletonBox 표시 */}
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            rel: 0,
            modestbranding: 1
          },
          width: '100%', // 컨테이너 너비에 맞추기
          height: '100%' // 컨테이너 높이에 맞추기
        }}
        onReady={() => setIsLoading(false)} // 비디오 로딩 완료 시 isLoading을 false로 설정
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </VideoContainer>
  );
}

export default VideoDisplay;
