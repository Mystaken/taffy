import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MainDrawer } from '.';

const stories = storiesOf('Drawers', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('Main Drawer', () => {
  return (
    <MainDrawer
      open
      onSignin={() => console.log('Sign in clicked')}
      onSignup={() => console.log('Sign up clicked')}
      onVIPPurchaseClicked={() => console.log('VIP clicked')}
    />
  );
});
