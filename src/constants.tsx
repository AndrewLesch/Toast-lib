import React from 'react';
import { faCircleCheck, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faBug, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import { ToastImage } from './components/ToastItem/styled';
import { heightAnimation, opacityAnimation, scaleAnimation } from './animations';
import {
  AnimationsType, PositionsType, ToastTypesType,
} from './types';

export const positions: PositionsType = {
  topLeft: (tostsInSamePlace: number) => ({
    firstPosition: `top: ${(tostsInSamePlace - 1) * 170}px`,
    secondPosition: 'left: 0px',
  }),
  topRight: (tostsInSamePlace: number) => ({
    firstPosition: `top: ${(tostsInSamePlace - 1) * 170}px`,
    secondPosition: 'right: 0px',
  }),
  bottomLeft: (tostsInSamePlace: number) => ({
    firstPosition: `bottom: ${(tostsInSamePlace - 1) * 170}px`,
    secondPosition: 'left: 0px',
  }),
  bottomRight: (tostsInSamePlace: number) => ({
    firstPosition: `bottom: ${(tostsInSamePlace - 1) * 170}px`,
    secondPosition: 'right: 0px',
  }),
};

export const types : ToastTypesType = {
  info: {
    img: <ToastImage data-testid="toast-icon-info" icon={faCircleQuestion} />,
    color: '#9A41D2',
  },
  warning: {
    img: <ToastImage data-testid="toast-icon-warning" icon={faTriangleExclamation} />,
    color: '#F4E04A',
  },
  success: {
    img: <ToastImage data-testid="toast-icon-success" icon={faCircleCheck} />,
    color: '#37E29B',
  },
  error: {
    img: <ToastImage data-testid="toast-icon-error" icon={faBug} />,
    color: '#E25736',
  },
};

export const animations: AnimationsType = {
  opacityAnimation,
  heightAnimation,
  scaleAnimation,
};
