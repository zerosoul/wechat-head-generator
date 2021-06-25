import { useRef, useState } from 'react';
// import {Rnd} from 'react-rnd';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import GlobalStyle from './GlobalStyle';
import StyledWrapper from './styled';
import ImageLogo from './assets/logo.png';
import Head from './components/Head';
const THRESHOLD = 50;
const perferNoMotion = window.matchMedia("(prefers-reduced-motion)").matches;
export default function App() {
  const box = useRef(null);
  const [png, setPng] = useState(null);
  const handleHover = (e) => {
    if (perferNoMotion) return;
    const card = box.current;
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  };

  const resetStyles = (e) => {
    if (perferNoMotion) return;
    const card = box.current;
    card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  };
  const handleGenerate = () => {
    let boxEle = box.current;
    html2canvas(boxEle, {
      allowTaint: true,
      useCORS: true,
      onclone: (doc) => {
        console.log({ doc });
        doc.querySelector('.box').classList.add('download');
      }
    }).then((c) => {
      let src = c.toDataURL('image/png');
      setPng(src);
    });
  };
  const handleDownload = () => {
    saveAs(png, 'image.png');
  };
  const handleReset = () => {
    setPng(null);
  };
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <aside className="btns">
          {png ? (
            <>
              <button className="btn download" onClick={handleDownload}></button>
              <button className="btn reset" onClick={handleReset}></button>
            </>
          ) : (
            <button className="btn generate" onClick={handleGenerate}></button>
          )}
        </aside>
        {png ? (
          <div className="generated">
            <img src={png} alt="generated image" />
          </div>
        ) : (
          <div className="box" ref={box} onMouseMove={handleHover} onMouseLeave={resetStyles}>
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
              <a className="mobile" contentEditable={true} href="tel:13666380296">
                13666380296
              </a>
            </div>
            <Head />
          </div>
        )}
      </StyledWrapper>
    </>
  );
}
