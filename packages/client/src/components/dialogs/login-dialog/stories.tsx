import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Dialog } from '@material-ui/core';
import { SignupDialogContent } from './signup-dialog-content';
import { LoginDialogContent } from './login-dialog-content';

const stories = storiesOf('Login Dialog', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('Signup Dialog', () => (
  <Dialog open>
    <SignupDialogContent />
  </Dialog>
));

stories.add('Login Dialog', () => (
  <Dialog open>
    <LoginDialogContent />
  </Dialog>
));
