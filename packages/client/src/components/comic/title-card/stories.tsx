import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TitleCard } from '.';
import { mockComic } from '../../../fixtures/comic.mock';

const stories = storiesOf('Comic', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('Title Card', () => {
  return (
    <>
      <TitleCard comic={mockComic()} />
    </>
  );
});
