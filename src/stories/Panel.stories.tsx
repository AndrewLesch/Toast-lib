import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Panel from '../components/Panel';

const stories = storiesOf('App tests', module);
stories.add('Test with panel', () => (<Panel />));
