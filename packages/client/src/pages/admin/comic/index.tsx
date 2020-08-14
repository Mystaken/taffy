import React, { FunctionComponent } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid
} from '@material-ui/core';

import { Page } from '../../../components/layouts/page';
import { ComicViewer } from '../../../containers/admin/comic-viewer';
import { withAuth } from '../../../containers/common/with-auth';
import { redirect } from '../../../utils/redirect';
import { pages } from '../../../routing';

const AdminComicPage: FunctionComponent = () => {
  const handleCreateComicButtonClick = async () => {
    await redirect(pages.admin.comicCreation);
  };

  const handleOnComicClick = async (comic: Comic) => {
    await redirect(pages.admin.comicEdit(comic.id));
  };

  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between">
            <Typography variant="h4" color="secondary">
              Comics
            </Typography>
            <Button color="secondary" onClick={handleCreateComicButtonClick}>
              Create Comic
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container>
        <ComicViewer onClick={handleOnComicClick} />
      </Container>
    </Page>
  );
};

export default withAuth(AdminComicPage, { isAdmin: true });
