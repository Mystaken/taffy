import { storiesOf } from '@storybook/react';
import { ComicCard } from '.';

const stories = storiesOf('Comic', module);
stories.addParameters({ info: { inline: true } });

stories.add('Comic Card', () => (
  <ComicCard
    title="test comic"
    image="https://via.placeholder.com/200x300"
    width={200}
  />
));
