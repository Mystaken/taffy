import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';

import { arrayify } from '../../../utils/common';

export const CarouselPanel: FunctionComponent = ({ children }) => {
  const panelItems = arrayify(children);
  return (
    <Grid container justify="space-evenly" spacing={0}>
      {panelItems.map((item, i) => (
        <Grid item key={i}>
          {item}
        </Grid>
      ))}
    </Grid>
  );
};
