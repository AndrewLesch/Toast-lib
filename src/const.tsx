import { faBug, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faCircleCheck, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { PositionsType, TypesType } from './types';
import { ToastImage } from './components/ToastItem/styled';

export const positions: PositionsType = {
  topLeft: {
    left: 0,
    top: 0,
    right: '',
    bottom: '',
  },
  topRight: {
    left: '',
    top: 0,
    right: 0,
    bottom: '',
  },
  bottomLeft: {
    left: 0,
    top: '',
    right: '',
    bottom: 0,
  },
  bottomRight: {
    left: '',
    top: '',
    right: 0,
    bottom: 0,
  },
};

export const types : TypesType = {
  info: {
    img: <ToastImage icon={faCircleQuestion} />,
    color: '#9A41D2',
  },
  warning: {
    img: <ToastImage icon={faTriangleExclamation} />,
    color: '#F4E04A',
  },
  success: {
    img: <ToastImage icon={faCircleCheck} />,
    color: '#37E29B',
  },
  error: {
    img: <ToastImage icon={faBug} />,
    color: '#E25736',
  },
};
