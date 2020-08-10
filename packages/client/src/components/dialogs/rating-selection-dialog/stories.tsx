import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RatingSelectDialog } from '.';

const stories = storiesOf('Comic', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('RatingSelectDialog', () => {
  const open = boolean('Open', true);
  return <RatingSelectDialog open={open} />;
});
