import { keyframes } from 'styled-components';

export const opacityAnimation = keyframes`
  0% { opacity: 0 }
  30% { opacity: 0.7 }
  80% { opacity: 1; }
  100% { opacity: 0; }
`;

export const heightAnimation = keyframes`
  0% { height: 0px }
  40% { height: 150px }
  80% { height: 150px }
  100% { height: 0px }
`;

export const widthAnimation = keyframes`
  0% { width: 0px }
  40% { width: 500px }
  80% {width: 500px}
  100% { width: 0px }
`;
