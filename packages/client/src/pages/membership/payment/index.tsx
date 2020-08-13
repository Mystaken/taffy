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
import { withAuth, WithAuthProps } from '../../../containers/common/with-auth';
import { redirect } from '../../../utils/redirect';
import { pages } from '../../../routing';

const useStyles = makeStyles(_ => ({
  container: {
    height: '100vh'
  }
}));

const MembershipPaymentPage: FunctionComponent<WithAuthProps> = ({ user }) => {
  const classes = useStyles();
  if (user && user.isVip) {
    redirect(pages.homepage);
  }
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

export default withAuth(MembershipPaymentPage);
