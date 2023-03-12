import { keyframes } from 'styled-components';

export const opacityAnimation = keyframes`
  0% { opacity: 0 }
  15% { opacity: 0.7 }
  85% { opacity: 1; }
  100% { opacity: 0; }
`;

export const scaleAnimation = keyframes`
  0% {
    transform: scale(0, 0)
  }
  15% {
    transform: scale(1.0, 1.0);
  }
  85% {
    transform: scale(1.0, 1.0);
  }
  100% {
    transform: scale(0, 0);
  }
`;

export const heightAnimation = keyframes`
  0%  {
    transform: translate(0px, -200px);
  }
  15% {
    transform: translate(0px, 0px);
  }
  85% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  100% {
    transform: translate(0px, -200px);
    opacity: 0;
  }
`;
