import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MobileTitleCard from '.';
import { PaddinglessContainer } from '../../layouts/paddingless-container';
import { mockComic } from '../../../fixtures/comic.mock';

const stories = storiesOf('Comic', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('Mobile Title Card', () => {
  return (
    <PaddinglessContainer maxWidth="sm">
      <MobileTitleCard comic={mockComic()} />
    </PaddinglessContainer>
  );
});
