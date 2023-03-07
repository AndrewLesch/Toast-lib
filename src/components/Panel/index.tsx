import React, { SyntheticEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastType } from '../../types';
import { singleton, ToastContainer } from '../ToastContainer';
import {
  AnimationSelector, ColorSelector, DescriptionInput, DescriptionItem, DurationSelector,
  PaddingSelector, PanelButton, PanelContainer, PositionSelector,
  TitleInput, TitleItem, TypeSelector,
} from './styled';

const defaultToast = {
  title: 'title',
  description: 'description',
  type: 'info',
  id: uuidv4(),
  animation: 'opacityAnimation',
  color: 'default',
  padding: '5',
  duration: 3000,
  position: 'topLeft',
};

function Panel() {
  const [toast, setToast] = useState<ToastType>(defaultToast);

  const submitHandler = (event: SyntheticEvent) => {
    event?.preventDefault();
    setToast({ ...toast, id: uuidv4() });
    singleton.addToast(toast);
  };

  return (
    <PanelContainer onSubmit={submitHandler}>
      <div>
        <TitleItem>Set toast title</TitleItem>
        <TitleInput maxLength={25} placeholder="title" onChange={(e) => setToast({ ...toast, title: e.target.value })} />
        <DescriptionItem>Set toast description</DescriptionItem>
        <DescriptionInput maxLength={250} placeholder="description" onChange={(e) => setToast({ ...toast, description: e.target.value })} />
        <ColorSelector defaultValue="default" onChange={(e) => setToast({ ...toast, color: e.target.value })}>
          <option value="default">Default color</option>
          <option value="#9A41D2">Purple</option>
          <option value="#F4E04A">Yellow</option>
          <option value="#E25736">Red</option>
          <option value="#37E29B">Green</option>
        </ColorSelector>
        <TypeSelector defaultValue="info" onChange={(e) => setToast({ ...toast, type: e.target.value })}>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="success">Success</option>
        </TypeSelector>
        <PositionSelector defaultValue="topLeft" onChange={(e) => setToast({ ...toast, position: e.target.value })}>
          <option value="topLeft">Top left</option>
          <option value="topRight">Top right</option>
          <option value="bottomLeft">Bottom left</option>
          <option value="bottomRight">Bottom right</option>
        </PositionSelector>
        <PaddingSelector defaultValue="5" onChange={(e) => setToast({ ...toast, padding: e.target.value })}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </PaddingSelector>
        <DurationSelector defaultValue="3000" onChange={(e) => setToast({ ...toast, duration: +e.target.value })}>
          <option value="3000">3 секунды</option>
          <option value="5000">5 секунд</option>
          <option value="7000">7 секунд</option>
          <option value="30000">30 секунд</option>
        </DurationSelector>
        <AnimationSelector defaultValue="opacityAnimation" onChange={(e) => setToast({ ...toast, animation: e.target.value })}>
          <option value="opacityAnimation">Opacity Animation</option>
          <option value="widthAnimation">Width Animation</option>
          <option value="heightAnimation">Height Animation</option>
        </AnimationSelector>
      </div>
      <PanelButton type="submit">Show toast</PanelButton>
      <ToastContainer />
    </PanelContainer>
  );
}

export default Panel;
