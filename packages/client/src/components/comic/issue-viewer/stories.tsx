import { storiesOf } from '@storybook/react';

import { IssueSelector } from '.';
import { mockComicIssueMeta } from '../../../fixtures/comic.mock';

const stories = storiesOf('Comic', module);
stories.addParameters({ info: { inline: true } });

stories.add('Issue Selector', () => (
  <IssueSelector issues={[mockComicIssueMeta()]} />
));
