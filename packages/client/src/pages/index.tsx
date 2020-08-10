import React, { FunctionComponent, useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import { NavbarContent } from '../components/layouts/nav-content';
import { Page } from '../components/layouts/page';
import { HomeScreen as HomeScreenView } from '../containers/home/home-screen';
import { Footer } from '../components/layouts/footer';
import LoginDrawer from '../containers/home/login-drawer';

const HomeScreen: FunctionComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <NavbarContent homeButtonClick={() => setDrawerOpen(old => !old)} />
        </Toolbar>
      </AppBar>
      <HomeScreenView />

      <LoginDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(_ => false)}
      />
      <Footer />
    </Page>
  );
};

export default HomeScreen;
