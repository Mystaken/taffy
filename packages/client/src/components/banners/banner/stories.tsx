import { storiesOf } from '@storybook/react';
import { Banner } from '.';
import { mockComic } from '../../../fixtures/comic.mock';

const stories = storiesOf('Panel Items', module);
stories.addParameters({ info: { inline: true } });

stories.add('Banner Panel', () => {
  const comic = mockComic();
  return (
    <Banner image={comic.bannerImage || ''} text={comic.title} width={400} />
  );
});
