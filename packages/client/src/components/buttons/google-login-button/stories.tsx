import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { GoogleLoginButton } from '.';

const stories = storiesOf('Button', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('Google Login Button', () => (
  <GoogleLoginButton onSuccess={() => null} onFailure={() => null} />
));
