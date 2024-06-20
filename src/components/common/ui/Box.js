import styled, { keyframes } from 'styled-components';

// Define the shimmer keyframes animation
const shimmer = keyframes`
  0% {
    background-position: -520px 0;
  }
  100% {
    background-position: 520px 0;
  }
`;

// Create the SkeletonBox component
const SkeletonBox = styled.div`
  width: 100%; // 부모 요소의 전체 너비 사용
  height: 100%; // 부모 요소의 전체 높이 사용
  background: #f0f0f0;
  background-image: linear-gradient(to right, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%);
  background-repeat: no-repeat;
  background-size: 1040px 100%;
  position: absolute; // 부모 요소 내에서 절대 위치
  top: 0;
  left: 0;
  overflow: hidden;
  animation: ${shimmer} 3s infinite linear;
  border-radius: 10px;

  @media only screen and (max-width: 734px) {
    width: 90%;
    height: auto;
  }
`;

export default SkeletonBox;
