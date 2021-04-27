import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ResizableBox } from 'react-resizable';
import ImageDrag from '../assets/drag.png';
import ImageHead from '../assets/head.png';
const StyledHead = styled.div`
  /* overflow: hidden; */
  width: 6rem;
  height: 6.66rem;
  .wrapper {
    position: relative;
    img {
      display: block;
      width: 100%;
    }
    .drag {
      visibility: hidden;
      cursor: move;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 30px;
      height: 30px;
      background-image: url(${ImageDrag});
      background-color: rgba(222, 222, 222, 0.4);
      border-radius: 50%;
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .react-resizable {
    position: relative;
    .react-resizable-handle {
      visibility: hidden;
      position: absolute;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-origin: content-box;
      box-sizing: border-box;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');
      background-position: bottom right;
      padding: 0 3px 3px 0;
      &.react-resizable-handle-sw {
        bottom: 0;
        left: 0;
        cursor: sw-resize;
        transform: rotate(90deg);
      }
      &.react-resizable-handle-se {
        bottom: 0;
        right: 0;
        cursor: se-resize;
      }
      &.react-resizable-handle-nw {
        top: 0;
        left: 0;
        cursor: nw-resize;
        transform: rotate(180deg);
      }
      &.react-resizable-handle-ne {
        top: 0;
        right: 0;
        cursor: ne-resize;
        transform: rotate(270deg);
      }
      &.react-resizable-handle-w,
      &.react-resizable-handle-e {
        top: 50%;
        margin-top: -10px;
        cursor: ew-resize;
      }
      &.react-resizable-handle-w {
        left: 0;
        transform: rotate(135deg);
      }
      &.react-resizable-handle-e {
        right: 0;
        transform: rotate(315deg);
      }
      &.react-resizable-handle-n,
      &.react-resizable-handle-s {
        left: 50%;
        margin-left: -10px;
        cursor: ns-resize;
      }
      &.react-resizable-handle-n {
        top: 0;
        transform: rotate(225deg);
      }
      &.react-resizable-handle-s {
        bottom: 0;
        transform: rotate(45deg);
      }
    }
    &:hover .react-resizable-handle {
      visibility: visible;
    }
  }

  .update {
    visibility: hidden;
    z-index: 99;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate3d(-50%, 0, 0);
    width: 30px;
    height: 30px;
    input,
    .btn {
      position: absolute;
    }
    input {
      cursor: pointer;
      opacity: 0;
      display: block;
      width: 30px;
      height: 30px;
    }
    .btn {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-image: url(${ImageHead});
      background-color: rgba(222, 222, 222, 0.4);
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  &:hover .wrapper .drag,
  &:hover .wrapper .update {
    visibility: visible;
  }
`;
import ImageDefault from '../assets/boss.png';
export default function Head({ src = ImageDefault }) {
  const [image, setImage] = useState(src);
  const parentRef = useRef(null);
  const [size, setSize] = useState({ width: 300, height: 300 });
  useEffect(() => {
    if (parentRef) {
      let containment = parentRef.current;
      let draggableEle = containment.querySelector('.react-resizable');
      let handle = containment.querySelector('.drag');
      new PlainDraggable(draggableEle, {
        containment,
        handle
      });
    }
  }, []);
  const handleResize = (evt, { size }) => {
    setSize(size);
  };
  const handleImageChange = ({ target }) => {
    let [file] = target.files;
    if (file) {
      let src = URL.createObjectURL(file);
      setImage(src);
    }
  };
  const { width, height } = size;
  return (
    <StyledHead ref={parentRef} className="head">
      <ResizableBox
        lockAspectRatio={true}
        width={width}
        height={height}
        minConstraints={[150, 150]}
        maxConstraints={[500, 500]}
        onResize={handleResize}
        resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      >
        <div width={width} height={height} className="wrapper">
          <img src={image} alt="head" />
          <div className="drag"></div>
          <div className="update">
            <div className="btn"></div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>
      </ResizableBox>
    </StyledHead>
  );
}
