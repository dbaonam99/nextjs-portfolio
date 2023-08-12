import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;

  .line {
    height: 100%;
    width: 25%;
    position: relative;

    @media (max-width: 700px) {
      width: 33.3333333%;
    }
  }

  .line::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background: rgba(255, 255, 255, 0.07);
    transition: height 0.65s cubic-bezier(0.165, 0.85, 0.45, 1) 0s;
  }

  .line::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #171717;
    transition: height 0.65s cubic-bezier(0.165, 0.85, 0.45, 1) 0s;
    z-index: 9;
    animation-direction: reverse;
    height: 0 !important;
  }

  .line:nth-child(odd):after {
    top: auto;
    bottom: 0;
    height: 100%;
  }

  .line:nth-child(2),
  .line:nth-child(5) {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

function BackgroundLine() {
  return (
    <Container>
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </Container>
  );
}

export default BackgroundLine;
