import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

import { Page } from '../../../components/layouts/page';
import { ComicViewer } from '../../../containers/admin/comic-viewer';
import { withAuth } from '../../../containers/common/with-auth';

const AdminComicPage: FunctionComponent = () => {
  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="secondary">
            Comics
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <ComicViewer />
      </Container>
    </Page>
  );
};

export default withAuth(AdminComicPage);
