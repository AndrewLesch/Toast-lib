import React from 'react';

import ToastContainer from '../components/ToastContainer';
import { ToastType } from '../types';
import { addToast } from '../utils';

export default {
  title: 'Test with button',
  argTypes: {
    title: { control: 'text' },
    id: { control: 'text' },
    description: { control: 'text' },
    type: {
      options: ['warning', 'info', 'error', 'success'],
      control: { type: 'radio' },
    },
    margin: { control: 'number' },
    position: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: { type: 'radio' },
    },
    animation: {
      options: ['scaleAnimation', 'opacityAnimation', 'heightAnimation'],
      control: { type: 'radio' },
    },
    duration: {
      options: [3000, 5000, 7000, 30000],
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

function Template(args: ToastType) {
  return <Button {...args} />;
}

function Button(args: ToastType) {
  const {
    description, title, color, id, position,
    animation, margin, duration, type, toastsInSamePosition,
  } = { ...args };

  const setToast = () => {
    const toast = {
      title,
      description,
      type,
      id,
      animation,
      color,
      margin,
      duration,
      position,
      toastsInSamePosition,
    };
    addToast(toast);
  };

  return (
    <div>
      <button type="button" onClick={() => setToast()}>Показать тост</button>
      <ToastContainer />
    </div>
  );
}

export const ButtonTest = Template.bind({});
