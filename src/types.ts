import React from 'react';
import { Keyframes } from 'styled-components';

export type ToastType = {
  title: string,
  description: string,
  type: string,
  id: string,
  animation: string,
  color: string,
  margin: string,
  duration: number,
  position: string,
  toastsInSamePosition : number,
}

export type PositionsType = {
  topLeft: (tostsInSamePlace: number) => {
    firstPosition: string;
    secondPosition: string;
  },
  topRight: (tostsInSamePlace: number) => {
    firstPosition: string;
    secondPosition: string;
  },
  bottomLeft: (tostsInSamePlace: number) => {
    firstPosition: string;
    secondPosition: string;
  },
  bottomRight: (tostsInSamePlace: number) => {
    firstPosition: string;
    secondPosition: string;
  },
}

export type ToastTypesType = {
  info: {
    img: React.ReactNode,
    color: string
  },
  warning: {
    img: React.ReactNode,
    color: string
  },
  success: {
    img: React.ReactNode,
    color: string
  },
  error: {
    img: React.ReactNode,
    color: string
  },
}

export type AnimationsType = {
  opacityAnimation: Keyframes,
  heightAnimation: Keyframes,
  scaleAnimation: Keyframes,
}

export type OptionsType = {
  value: string,
  text: string,
}

export type ToastItemType = {
  position: {
    firstPosition: string,
    secondPosition: string,
  };
  margin: string;
  type: {
    color: string
  };
  duration: number;
  animation: Keyframes;
}
