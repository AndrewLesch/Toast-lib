import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ToastContainer } from '../components/ToastContainer';

const stories = storiesOf('app test', module);
stories.add('app', () => (<ToastContainer />));
