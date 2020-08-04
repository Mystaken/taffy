import React, { FunctionComponent } from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';

import { FooterLinks } from './footer-links';
import { FooterIcons } from './footer-icons';
import { FooterText } from './footer-text';

export interface FooterProps {
  transparent?: boolean;
}
export const Footer: FunctionComponent<FooterProps> = ({
  transparent = false
}) => {
  const classes = makeStyles(theme => ({
    footer: {
      backgroundColor: transparent ? 'rgb(0,0,0,0)' : '#5F5F5F',
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0)
    }
  }))();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <FooterLinks />
          </Grid>
          <Grid item>
            <FooterIcons />
          </Grid>
          <Grid item>
            <FooterText variant="h5" align="center">
              Taffy
            </FooterText>
          </Grid>
          <FooterText variant="caption" align="center">
            &copy; 2019 Taffy. All Rights Reserved.
          </FooterText>
        </Grid>
      </Container>
    </footer>
  );
};
