import { useRef, useState } from 'react';
// import {Rnd} from 'react-rnd';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
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
        )}
      </StyledWrapper>
    </>
  );
}
