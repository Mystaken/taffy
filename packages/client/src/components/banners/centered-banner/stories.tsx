import { storiesOf } from '@storybook/react';
import { CenteredBanner } from '.';

const stories = storiesOf('Banners', module);
stories.addParameters({ info: { inline: true } });

stories.add('Comic Card', () => (
  <CenteredBanner
    height={200}
    backgroundImg="https://via.placeholder.com/300x1000"
    foregroundImg="https://via.placeholder.com/300x800"
    containerWidth={800}
  />
));
