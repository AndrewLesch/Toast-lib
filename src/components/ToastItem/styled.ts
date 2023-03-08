import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { ElementBodyType } from '../../types';

export const ToastElementLayout = styled.div<ElementBodyType>`
  border-radius: 10px;
  box-sizing: border-box;
  position: fixed;
  width: 500px;
  height: 150px;
  color: white;
  ${({ position }) => position.firstPosition};
  ${({ position }) => position.secondPosition};
  background-color: ${({ type, color }) => (color !== 'default' ? color : type.color)};
  animation: ${({ animation }) => (animation)}
    ${({ duration }) => duration / 1000 + 0.1}s;
  margin: ${({ margin }) => margin}px;
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
  overflow-x: hidden;
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
