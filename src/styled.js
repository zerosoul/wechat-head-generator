import styled from 'styled-components';
import BgImage from './assets/bg.png';
import ImageDownload from './assets/download.png';
import ImagePic from './assets/image.png';
import ImageReset from './assets/reset.png';
import Image3D from './assets/3d.png';
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
    border-radius: 10px;
    background-color: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow: 20px 20px 60px #79c0e580, -20px -20px 60px #709ecb60;
    transition: transform .2s linear;
    &.download {
      border-radius: 0;
      background-color: none;
      box-shadow: none;
    }
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
      cursor: pointer;
      width: 60px;
      height: 60px;
      outline: none;
      border: none;
      margin-top: 0.2rem;
      border-radius: 50%;
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
      margin-left: 8px;
      background-color: #78ddaa;
      box-shadow: 10px 10px 60px #79c0e590, -10px -10px 60px #709ecb80;
      &.generate {
        background-image: url(${ImagePic});
      }
      &.download {
        background-image: url(${ImageDownload});
      }
      &.reset {
        background-image: url(${ImageReset});
      }
      &.three_d {
        background-image: url(${Image3D});
        &.disable{
          filter: grayscale(1);
        }
      }
    }
  }
  .generated {
    width: 10rem;
    height: 10rem;
    max-width: 70vw;
    max-height: 70vw;
    img {
      width: 100%;
    }
  }
`;

export default StyledWrapper;
