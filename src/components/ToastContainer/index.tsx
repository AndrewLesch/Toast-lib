import React from 'react';
import { createPortal } from 'react-dom';

import useToast from '../../hooks/useToast';
import { ToastType } from '../../types';
import ErrorBoundary from '../ErrorBoundary';
import ToastItem from '../ToastItem';

import ToastLayout from './styled';

const ToastContainer = () => {
  const toasts = useToast();
  const amountToastsInPositions = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  };

  return createPortal(
    <ErrorBoundary>
      <ToastLayout>
        {toasts.map((toast: ToastType) => {
          amountToastsInPositions[toast.position as keyof typeof amountToastsInPositions]++;
          return (
            <ToastItem
              key={toast.id}
              {...toast}
              toastsInSamePosition={
                amountToastsInPositions[
                  toast.position as keyof typeof amountToastsInPositions
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
