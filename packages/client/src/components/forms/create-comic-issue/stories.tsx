import { storiesOf } from '@storybook/react';
import { CreateComicIssueForm } from '.';

const stories = storiesOf('Forms', module);
stories.addParameters({ info: { inline: true } });

stories.add('Create Comic Issue Form', () => <CreateComicIssueForm />);
