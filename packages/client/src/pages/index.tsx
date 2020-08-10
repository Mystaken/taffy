import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import { NavbarContent } from '../components/layouts/nav-content';
import { Page } from '../components/layouts/page';
import { HomeScreen as HomeScreenView } from '../containers/home/home-screen';
import { Footer } from '../components/layouts/footer';

const HomeScreen: FunctionComponent = () => {
  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <NavbarContent />
        </Toolbar>
      </AppBar>
      <HomeScreenView />

      <Footer />
    </Page>
  );
};

export default HomeScreen;
