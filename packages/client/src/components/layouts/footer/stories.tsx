import { storiesOf } from '@storybook/react';
import { Footer } from '.';

const stories = storiesOf('Layouts', module);

stories.addParameters({ info: { inline: true } });
stories.add('Footer', () => <Footer></Footer>);
