import styled from 'styled-components';

export const Container = styled.div`
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
