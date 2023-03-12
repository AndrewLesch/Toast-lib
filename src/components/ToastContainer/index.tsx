import React from 'react';
import { createPortal } from 'react-dom';

import useToast from '../../hooks/useToast';
import ErrorBoundary from '../ErrorBoundary';
import ToastItem from '../ToastItem';

import ToastLayout from './styled';

const ToastContainer = () => {
  const { toasts } = useToast();
  const amountToastsInPositions = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  };

  return createPortal(
    <ErrorBoundary>
      <ToastLayout>
        {toasts.map(({
          id, title, position, type, color, description, duration, animation, margin,
        }) => {
          amountToastsInPositions[position as keyof typeof amountToastsInPositions]++;
          return (
            <ToastItem
              position={position}
              id={id}
              animation={animation}
              duration={duration}
              margin={margin}
              key={id}
              title={title}
              color={color}
              type={type}
              description={description}
              toastsInSamePosition={
                amountToastsInPositions[
                  position as keyof typeof amountToastsInPositions
                ]
              }
            />
          );
        })}
      </ToastLayout>
    </ErrorBoundary>,
    document.body,
  );
};

export default ToastContainer;
