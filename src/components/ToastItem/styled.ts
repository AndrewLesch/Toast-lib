import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0% { opacity: 0 }
  30% { opacity: 0.7 }
  80% { opacity: 1; }
  100% { opacity: 0; }
`;

const heightAnimation = keyframes`
  0% { height: 0px }
  40% { height: 150px }
  80% { height: 150px}
  100% { height:0px }
`;

const widthAnimation = keyframes`
  0% { width: 0px }
  40% { width: 500px }
  80% {width: 500px}
  100% { width: 0px }
`;

type ElementBodyType = {
  position: {
    left: string | number,
    bottom: string | number,
    top: string | number,
    right: string | number,
  };
  padding: string;
  type: {
    color: string
  };
  duration: number;
  animation: string;
}
export const ToastElementLayout = styled.div<ElementBodyType>`
  border-radius: 10px;
  position: fixed;
  box-sizing: border-box;
  width: 500px;
  height: 150px;
  color: white;
  left: ${({ position }) => position.left}px;
  right: ${({ position }) => position.right}px;
  bottom: ${({ position }) => position.bottom}px;
  top: ${({ position }) => position.top}px;
  background-color: ${({ type, color }) => (color !== 'default' ? color : type.color)};
  animation: ${({ animation }) => (animation === 'opacityAnimation' ? opacityAnimation
    : animation === 'heightAnimation' ? heightAnimation
      : widthAnimation)}
    ${({ duration }) => duration / 1000 + 0.1}s;
  margin: ${({ padding }) => padding}px;
`;

export const ToastHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 5px;
`;

export const ToastTitle = styled.h6`
  width: 320px;
  font-size: 23px;
  word-wrap: break-word;
  overflow-x:hidden;
  text-align: center;
  margin: 0;
  max-height: 40px;
  margin-left: 95px;
`;

export const ToastContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const ToastImage = styled(FontAwesomeIcon)`
  height: 55px;
  width: 55px;
  margin-left: 20px;
  margin-bottom: 40px;
`;

export const ToastDescription = styled.h6`
  width: 320px;
  margin: 5px;
  height: 100px;
  word-wrap: break-word;
  overflow-x:hidden;
  font-size: 17px;
  margin-right: 80px;
  text-align: center;
`;

export const DeleteButton = styled.button`
  background: none;
  color: white;
  border: none;
  margin-right: 5px;
  font-size: 19px;
`;
