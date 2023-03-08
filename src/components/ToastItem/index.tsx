import * as React from 'react';

import { animations, positions, types } from '../../constants';
import { ToastType } from '../../types';
import { deleteToast } from '../../utils';

import {
  DeleteButton,
  ToastContentContainer,
  ToastDescription,
  ToastElementLayout, ToastHeader, ToastTitle,
} from './styled';

function ToastItem(toast: ToastType) {
  const {
    description, title, color, id, position,
    animation, margin, duration, type, toastsInSamePosition,
  } = { ...toast };

  return (
    <ToastElementLayout
      draggable
      onDragEnd={() => deleteToast(id)}
      position={positions[position as keyof typeof positions](toastsInSamePosition)}
      type={types[type as keyof typeof types]}
      duration={duration}
      margin={margin}
      animation={animations[animation as keyof typeof animations]}
      color={color}
    >
      <ToastHeader>
        <ToastTitle>{title}</ToastTitle>
        <DeleteButton type="button" onClick={() => deleteToast(id)}>X</DeleteButton>
      </ToastHeader>
      <ToastContentContainer>
        {types[type as keyof typeof types].img}
        <ToastDescription>{description}</ToastDescription>
      </ToastContentContainer>
    </ToastElementLayout>
  );
}

export default ToastItem;
