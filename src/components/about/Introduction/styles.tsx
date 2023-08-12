import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 80px;
  margin-bottom: 50px;
  display: flex;

  @media (max-width: 1199px) {
    padding: 0 50px;
  }

  @media (max-width: 850px) {
    padding: 0 30px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 650px) {
    padding: 0 20px;
  }
`;

export const Avatar = styled.div`
  width: 30%;
  border: 1px #ccc solid;
  padding: 15px;
  height: 32vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';
    width: 70%;
    height: 5px;
    background-color: #45ff95;
    position: absolute;
    bottom: 15px;
    left: 15px;
  }

  @media (max-width: 750px) {
    width: 300px;
    height: 350px;
    margin-bottom: 50px;
  }

  @media (max-width: 350px) {
    width: 100%;
    height: 100vw;
  }
`;

export const Detail = styled.div`
  width: 70%;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1199px) {
    padding: 0 30px;
  }

  @media (max-width: 750px) {
    width: 100%;
    padding: 0;

    .introduce {
      text-align: center;
    }
  }

  .introduce {
    color: #ccc;
    line-height: 1.5;
    font-weight: normal;
  }

  .info-list {
    display: flex;
    flex-wrap: wrap;

    .info-item {
      display: flex;
      width: 50%;
      margin: 20px 0;
      color: #ccc;
      font-weight: 400;

      @media (max-width: 650px) {
        width: 100%;
        justify-content: center;
      }

      .key {
        margin-right: 10px;
        color: #45ff95;
      }
    }
  }
`;

export const Download = styled.div`
  display: flex;
  justify-content: center;
  algin-items: center;

  p {
    margin-top: 10px;
    padding: 10px 30px;
    outline: none;
    border: 2px #45ff95 solid;
    color: #45ff95;
    background-color: transparent;
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
    font-weight: bold;
    width: max-content;

    &:hover {
      background-color: #45ff95;
      color: #000;
    }
  }
`;
