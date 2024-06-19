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

export const ImageContainer = styled.div`
  margin: 20px 0;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

export const TextContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  h2 {
    font-size: 1.25rem;
    margin: 10px 0;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

export const TestButton = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
