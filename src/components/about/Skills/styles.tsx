import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 80px;
  margin-top: 100px;

  @media (max-width: 1199px) {
    padding: 0 60px;

    .about-skill-title {
      font-size: 18px;
    }
  }

  @media (max-width: 850px) {
    padding: 0 30px;
  }
`;

export const MySkills = styled.div`
  flex-wrap: wrap;
  position: relative;
  display: flex;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
