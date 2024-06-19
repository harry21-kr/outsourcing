import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial, sans-serif';
`;

export const Content = styled.main`
  text-align: center;
  padding: 20px;
`;

export const CenterTitle = styled.h2`
  text-align: center;
  font-size: 220%;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: medium;
  margin: 20px;
`;

export const ImageContainer = styled.div`
  margin: 20px 0;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;
