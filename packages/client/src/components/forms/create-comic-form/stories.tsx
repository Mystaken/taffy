import { storiesOf } from '@storybook/react';
import { CreateComicForm } from '.';

const stories = storiesOf('Forms', module);
stories.addParameters({ info: { inline: true } });

stories.add('Create Comic Form', () => <CreateComicForm />);
