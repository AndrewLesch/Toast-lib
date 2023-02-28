import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Panel from '../components/Panel';

const stories = storiesOf('app test', module);
stories.add('panel', () => (<Panel />));
