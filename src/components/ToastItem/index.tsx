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

function ToastItem({
  id, title, position = 'topLeft', type = 'info',
  color, description, duration,
  toastsInSamePosition,
  animation = 'opacityAnimation', margin,
} :ToastType) {
  return (
    <ToastElementLayout
      data-testid="toast"
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
        <ToastTitle data-testid="toast-title">
          {title.length > 20 ? title.slice(0, 17).concat('...') : title}
        </ToastTitle>
        <DeleteButton type="button" onClick={() => deleteToast(id)}>X</DeleteButton>
      </ToastHeader>
      <ToastContentContainer>
        {types[type as keyof typeof types].img}
        <ToastDescription data-testid="toast-description">
          {description.length > 150 ? description.slice(147).concat('...') : description}
        </ToastDescription>
      </ToastContentContainer>
    </ToastElementLayout>
  );
}

export default ToastItem;
