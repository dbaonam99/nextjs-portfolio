import { styled } from 'styled-components';

const Container = styled.div`
  position: relative;
  -webkit-clip-path: polygon(31% 0, 100% 25%, 61% 100%, 0 93%);
  clip-path: polygon(31% 0, 100% 25%, 61% 100%, 0 93%);
  top: -2vh;
  left: 3.5vw;
  width: 56vw;
  height: 80vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: 1199px) {
    top: 50px;
    left: 50px;
    width: 640px;
    height: 560px;
  }

  @media (max-width: 950px) {
    left: 0px;
  }

  @media (max-width: 900px) {
    left: -50px;
  }

  @media (max-width: 800px) {
    left: -100px;
  }

  @media (max-width: 700px) {
    width: 120%;
    height: 62vh;
    left: 0;
    top: 0;
    -webkit-clip-path: polygon(25% 0, 100% 25%, 80% 100%, 0 85%);
    clip-path: polygon(25% 0, 100% 25%, 80% 100%, 0 85%);
  }

  @media screen and (max-device-width: 1199px) and (min-device-width: 319px) and (max-device-height: 500px) and (orientation: landscape) {
    width: 70%;
    height: 70vh;
    top: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

function Avatar() {
  return (
    <Container
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
      }}
    />
  );
}
export default Avatar;
