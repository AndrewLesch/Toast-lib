import { OptionsType } from '../../types';

export const colorSelectorOptions: OptionsType[] = [
  { value: 'default', text: 'Default color' },
  { value: '#9A41D2', text: 'Purple' },
  { value: '#F4E04A', text: 'Yellow' },
  { value: '#E25736', text: 'Red' },
  { value: '#37E29B', text: 'Green' },
];

export const typeSelectorOptions: OptionsType[] = [
  { value: 'info', text: 'Info' },
  { value: 'warning', text: 'Warning' },
  { value: 'success', text: 'Success' },
  { value: 'error', text: 'Error' },
];

export const positionSelectorOptions: OptionsType[] = [
  { value: 'topLeft', text: 'Top left' },
  { value: 'topRight', text: 'Top right' },
  { value: 'bottomLeft', text: 'Bottom left' },
  { value: 'bottomRight', text: 'Bottom right' },
];

export const marginSelectorOptions: OptionsType[] = [
  { value: '5', text: '5' },
  { value: '10', text: '10' },
  { value: '15', text: '15' },
  { value: '20', text: '20' },
];

export const durationSelectorOptions: OptionsType[] = [
  { value: '3000', text: '3 секунды' },
  { value: '5000', text: '5 секунд' },
  { value: '7000', text: '7 секунд' },
  { value: '10000', text: '10 секунд' },
];

export const animationSelectorOptions: OptionsType[] = [
  { value: 'opacityAnimation', text: 'Opacity Animation' },
  { value: 'widthAnimation', text: 'Width Animation' },
  { value: 'heightAnimation', text: 'Height Animation' },
];
