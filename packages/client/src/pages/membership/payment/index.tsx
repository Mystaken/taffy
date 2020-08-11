import React, { FunctionComponent } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  makeStyles,
  Grid
} from '@material-ui/core';

import { MembershipPayment } from '../../../containers/payment/membership-payment';
import { Page } from '../../../components/layouts/page';
import { NavbarContent } from '../../../components/layouts/nav-content';

const useStyles = makeStyles(_ => ({
  container: {
    height: '100vh'
  }
}));

const MembershipPaymentPage: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <NavbarContent />
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.container}>
        <Container maxWidth="sm">
          <MembershipPayment />
        </Container>
      </Grid>
    </Page>
  );
};

export default MembershipPaymentPage;
