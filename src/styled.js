import styled from 'styled-components';
import BgImage from './assets/bg.png';
const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  .box {
    overflow: hidden;
    user-select: none;
    position: relative;
    width: 10rem;
    height: 10rem;
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
      width: 8.88rem;
      img {
        width: 100%;
      }
    }
    .detail {
      z-index: 8;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      color: #000;
      position: absolute;
      right: 0.36rem;
      bottom: 2.8rem;
      .name {
        font-family: source-han-sans-simplified-c, sans-serif, hei, system-ui, 'Microsoft Yahei',
          'Helvetica';
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 0.23rem;
      }
      .title {
        font-family: system-ui, 'Microsoft Yahei', 'Helvetica';
        font-size: 0.58rem;
        color: #014749;
        margin-bottom: 0.45rem;
      }
      .mobile {
        font-size: 0.86rem;
        color: #000;
        letter-spacing: -4px;
        text-decoration: none;
        /* font-weight: 400; */
        font-family: source-han-sans-simplified-c, sans-serif, hei, system-ui, 'Microsoft Yahei',
          'Helvetica';
      }
      .name:focus,
      .title:focus,
      .mobile:focus {
        border: 1px dotted #555;
      }
    }
    .head {
      z-index: 9;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .btns {
    position: fixed;
    right: 0.2rem;
    bottom: 0.2rem;
    .btn {
      margin-top: 0.2rem;
    }
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
