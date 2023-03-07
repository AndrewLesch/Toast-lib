import * as React from 'react';
import { ToastType } from '../../types';
import { positions, types } from '../../const';
import { singleton } from '../ToastContainer';
import {
  ToastElementLayout, DeleteButton,
  ToastHeader, ToastTitle, ToastContentContainer,
  ToastDescription,
} from './styled';

function ToastItem(toast: ToastType) {
  const {
    description, title, color, id, position, animation, padding, duration, type,
  } = { ...toast };

  const deleteToast = (id: string) => {
    singleton.deleteToast(id);
  };

  return (
    <ToastElementLayout
      draggable
      onDragEnd={() => deleteToast(id)}
      position={positions[position as keyof typeof positions]}
      type={types[type as keyof typeof types]}
      duration={duration}
      padding={padding}
      animation={animation}
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
