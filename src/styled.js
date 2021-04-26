import styled from 'styled-components';
import BgImage from './assets/bg.png';
const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .box {
    user-select: none;
    position: relative;
    width: 40rem;
    height: 40rem;
    max-width: 70vw;
    max-height: 70vw;
    background-image: url(${BgImage});
    background-repeat: no-repeat;
    background-size: contain;
    .logo {
      position: absolute;
      top: 0.36rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      img {
        width: 100%;
      }
    }
    .detail {
      z-index: 9;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      color: #000;
      position: absolute;
      right: 0.36rem;
      bottom: 2.8rem;
      font-family: hei, system-ui;
      .name {
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 0.23rem;
      }
      .title {
        font-size: 0.58rem;
        color: #014749;
        margin-bottom: 0.45rem;
      }
      .mobile {
        font-size: 0.86rem;
        color: #000;
        text-decoration: none;
        font-weight: 800;
        font-family: sans-serif;
      }
      .name:focus,
      .title:focus,
      .mobile:focus {
        border: 1px dotted #555;
      }
    }
    .head {
      z-index: 8;
      width: 6rem;
      position: absolute;
      left: 0;
      bottom: 0;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .btn {
    margin-top: 0.2rem;
  }
  .generated {
    width: 40rem;
    height: 40rem;
    max-width: 70vw;
    max-height: 70vw;
    img {
      width: 100%;
    }
  }
`;

export default StyledWrapper;
