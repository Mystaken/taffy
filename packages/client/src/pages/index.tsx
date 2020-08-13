import React, { FunctionComponent, useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import { NavbarContent } from '../components/layouts/nav-content';
import { Page } from '../components/layouts/page';
import { HomeScreen as HomeScreenView } from '../containers/home/home-screen';
import { Footer } from '../components/layouts/footer';
import LoginDrawer from '../containers/home/login-drawer';
import { FooterContainer } from '../components/layouts/footer/footer-container';
import { redirect } from '../utils/redirect';
import { pages } from '../routing';
import { getCurrentUser } from '../services/auth/user-cookie';

const HomeScreen: FunctionComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleOnComicSelect = (comic: Comic) => {
    redirect(pages.comic.comicDetails(comic.id));
  };

  const handleOnVipClicked = () => {
    const user = getCurrentUser();
    if (!user?.isVip) {
      redirect(pages.membership.payment);
    }
  };
  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <NavbarContent homeButtonClick={() => setDrawerOpen(old => !old)} />
        </Toolbar>
      </AppBar>
      <FooterContainer>
        <HomeScreenView onComicSelect={handleOnComicSelect} />
        <Footer />
      </FooterContainer>

      <LoginDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(_ => false)}
        onVipPurchaseClicked={handleOnVipClicked}
      />
    </Page>
  );
};

export default HomeScreen;
