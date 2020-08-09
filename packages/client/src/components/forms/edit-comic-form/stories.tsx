import { storiesOf } from '@storybook/react';
import { EditComicForm } from '.';
import { mockComic } from '../../../fixtures/comic.mock';

const stories = storiesOf('Forms', module);
stories.addParameters({ info: { inline: true } });

stories.add('Edit Comic Form', () => <EditComicForm comic={mockComic()} />);
