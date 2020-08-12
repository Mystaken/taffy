import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from '../src/themes/default.theme';
import { Grid } from '@material-ui/core';

// automatically import stories.tsx files
const req = require.context('../src', true, /stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

// load themes
addDecorator(story => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ height: '100vh' }}>
        {story()}
      </Grid>
    </ThemeProvider>
  </>
));

configure(loadStories, module);
