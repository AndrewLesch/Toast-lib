import React, { SyntheticEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ToastType } from '../../types';
import { addToast } from '../../utils';
import ToastContainer from '../ToastContainer';

import {
  animationSelectorOptions, colorSelectorOptions,
  durationSelectorOptions, marginSelectorOptions,
  positionSelectorOptions, typeSelectorOptions,
} from './config';
import {
  AnimationSelector, ColorSelector, DescriptionInput, DescriptionItem, DurationSelector,
  MarginSelector, PanelButton, PanelContainer, PositionSelector,
  TitleInput, TitleItem, TypeSelector,
} from './styled';

function Panel() {
  const [toast, setToast] = useState<ToastType>({
    title: '',
    description: '',
    type: 'info',
    id: uuidv4(),
    animation: 'opacityAnimation',
    color: 'default',
    margin: '5',
    duration: 3000,
    position: 'topLeft',
    toastsInSamePosition: 0,
  });

  const submitHandler = (event: SyntheticEvent) => {
    event?.preventDefault();
    addToast(toast);
    setToast({...toast, id: uuidv4()})
  };

  const setToastValue = (toastProp: string) => (event: React.ChangeEvent<HTMLInputElement> |
          React.ChangeEvent<HTMLTextAreaElement> |
          React.ChangeEvent<HTMLSelectElement>): void => {
    setToast({ ...toast, [toastProp]: event.target.value });
  };

  return (
    <PanelContainer onSubmit={submitHandler}>
      <TitleItem>Set toast title</TitleItem>
      <TitleInput
        data-testid="title"
        required
        value={toast.title}
        placeholder="Toast title"
        onChange={setToastValue('title')}
      />
      <DescriptionItem>Set toast description</DescriptionItem>
      <DescriptionInput
        data-testid="description"
        value={toast.description}
        placeholder="Toast description"
        onChange={setToastValue('description')}
      />
      <ColorSelector
        data-testid="color"
        value={toast.color}
        onChange={setToastValue('color')}
      >
        {colorSelectorOptions.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </ColorSelector>
      <TypeSelector
        data-testid="type"
        value={toast.type}
        onChange={setToastValue('type')}
      >
        {typeSelectorOptions.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </TypeSelector>
      <PositionSelector
        data-testid="position"
        value={toast.position}
        onChange={setToastValue('position')}
      >
        {positionSelectorOptions.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </PositionSelector>
      <MarginSelector
        data-testid="margin"
        value={toast.margin}
        onChange={setToastValue('margin')}
      >
        {marginSelectorOptions.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </MarginSelector>
      <DurationSelector
        data-testid="duration"
        value={toast.duration}
        onChange={setToastValue('duration')}
      >
        {durationSelectorOptions.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </DurationSelector>
      <AnimationSelector
        data-testid="animation"
        value={toast.animation}
        onChange={setToastValue('animation')}
      >
        {animationSelectorOptions.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </AnimationSelector>
      <PanelButton data-testid="submit" type="submit">Show toast</PanelButton>
      <ToastContainer />
    </PanelContainer>
  );
}

export default Panel;
