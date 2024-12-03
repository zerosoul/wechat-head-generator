import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,body{
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    position: relative;
    min-height: 100%;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;
  }
#root{
  background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
@media screen and (min-width: 320px){
      html {
          font-size: 55px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 60px;
      }
  }

  @media screen and (min-width: 768px){
      html {
          font-size: 65px;
      }
  }
  @media screen and (min-width: 1000px){
      html {
          font-size: 70px;
      }
  }
  @media screen and (min-width: 1200px){
      html {
          font-size: 74px;
      }
  }
  @media screen and (min-width: 1400px){
      html {
          font-size: 76px;
      }
  }
  @media screen and (min-width: 1920px){
      html {
          font-size: 100px;
      }
  }
`;

export default GlobalStyle;
