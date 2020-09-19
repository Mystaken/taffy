import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TitleCard } from '.';
import { mockComic } from '../../../fixtures/comic.mock';

const stories = storiesOf('Comic', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('Title Card', () => {
  return (
    <>
      <TitleCard
        comic={mockComic({
          authors: ['Chris Brown'],
          genres: ['Action'],
          desktopBackgroundImage:
            'https://taffy-comic-image.s3.amazonaws.com/Comic%20Title-desktop-background-image.jpg',
          desktopForegroundImage:
            'https://taffy-comic-image.s3.amazonaws.com/Comic%20Title-desktop-foreground-image.png'
        })}
      />
    </>
  );
});
