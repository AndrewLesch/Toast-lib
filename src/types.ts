import React from 'react';

export type ToastType = {
  title: string,
  description: string,
  type: string,
  id: string,
  animation: string,
  color: string,
  padding: string,
  duration: number,
  position: string,
}

export type PositionsType = {
  topLeft: {
    left: string | number,
    top: string | number,
    bottom: string | number,
    right: string | number,
  },
  topRight: {
    left: string | number,
    top: string | number,
    bottom: string | number,
    right: string | number,
  },
  bottomLeft: {
    left: string | number,
    top: string | number,
    bottom: string | number,
    right: string | number,
  },
  bottomRight: {
    left: string | number,
    top: string | number,
    bottom: string | number,
    right: string | number,
  },
}

export type TypesType = {
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
