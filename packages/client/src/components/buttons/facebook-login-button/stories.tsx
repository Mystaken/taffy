import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FacebookLoginButton } from '.';

const stories = storiesOf('Button', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('Facebook Login Button', () => (
  <FacebookLoginButton callback={() => null} />
));
