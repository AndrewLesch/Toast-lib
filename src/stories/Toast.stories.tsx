import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Toast from '..';

const stories = storiesOf('app test', module);
stories.add('app', () => (<Toast />));
