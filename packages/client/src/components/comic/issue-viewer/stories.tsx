import { storiesOf } from '@storybook/react';

import { IssueViewer } from '.';
import { mockComicIssue } from '../../../fixtures/comic.mock';

const stories = storiesOf('Comic', module);
stories.addParameters({ info: { inline: true } });

stories.add('Issue Viewer', () => <IssueViewer issues={[mockComicIssue()]} />);
