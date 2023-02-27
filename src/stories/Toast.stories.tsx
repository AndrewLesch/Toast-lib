import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Toast from '../components/Toast';

const stories = storiesOf('app test', module);
stories.add('app', () => (<Toast />));
