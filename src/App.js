import { useRef, useState } from 'react';
// import {Rnd} from 'react-rnd';
import html2canvas from 'html2canvas';
import GlobalStyle from './GlobalStyle';
import StyledWrapper from './styled';
import ImageLogo from './assets/logo.png';
import Head from './components/Head';
export default function App() {
  const box = useRef(null);
  const [png, setPng] = useState(null);
  // useEffect(() => {
  //   if (box) {
  //     let boxEle = box.current;
  //   }
  // }, []);
  const handleGenerate = () => {
    html2canvas(box.current).then((c) => {
      let src = c.toDataURL('image/png');
      setPng(src);
    });
  };
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <div className="box" ref={box}>
          <div className="logo">
            <img src={ImageLogo} alt="logo" />
          </div>
          <div className="detail">
            <h1 className="name" contentEditable={true}>
              杨国亭
            </h1>
            <h2 className="title" contentEditable={true}>
              高级验光师
            </h2>
            <a className="mobile" contentEditable={true} href="tel:18201385848">
              18201385848
            </a>
          </div>
          <Head />
        </div>
        <aside className="btns">
          <button className="btn" onClick={handleGenerate}>
            生成图片
          </button>
        </aside>
        {png && (
          <div className="generated">
            <img src={png} alt="generated image" />
          </div>
        )}
      </StyledWrapper>
    </>
  );
}
