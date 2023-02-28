import * as React from 'react';
import AnimationPicker from './AnimationPicker';
import ColorPicker from './ColorPicker';
import Description from './Description';
import MarginPicker from './MarginPicker';
import PanelButton from './PanelButton';
import PositionPicker from './PositionPicker';
import PanelContainer from './styled';
import TimePicker from './TimePicker';
import TypePicker from './TypePicker';

function Panel() {
  return (
    <PanelContainer>
      <Description />
      <AnimationPicker />
      <ColorPicker />
      <MarginPicker />
      <TypePicker />
      <TimePicker />
      <PositionPicker />
      <PanelButton type="submit" />
      <PanelButton type="no submit" />
    </PanelContainer>
  );
}

export default Panel;
