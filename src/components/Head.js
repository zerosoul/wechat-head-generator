import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ResizableBox } from 'react-resizable';
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
      position: absolute;
      right: -10px;
      top: 0;
      width: 10px;
      height: 10px;
      background: #fff;
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
`;
import ImageHead from '../assets/head.png';
export default function Head({ src = ImageHead }) {
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
          <img src={src} alt="head" />
          <button className="drag">拖动</button>
        </div>
      </ResizableBox>
    </StyledHead>
  );
}
