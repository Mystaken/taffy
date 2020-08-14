import React, { FunctionComponent, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles
} from '@material-ui/core';

import { Page } from '../../../components/layouts/page';
import { CreateComicForm } from '../../../containers/admin/create-comic';
import { withAuth } from '../../../containers/common/with-auth';
import { redirect } from '../../../utils/redirect';
import { pages } from '../../../routing';

const useStyles = makeStyles(_ => ({
  container: {
    paddingTop: '10px'
  }
}));

const CreateComicPage: FunctionComponent = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleOnCreateComic = async (comic: Comic) => {
    setLoading(true);
    await redirect(pages.admin.comicViewer);
    setLoading(false);
  };

  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="secondary">
            Create Comic
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <CreateComicForm
          onCreateComic={handleOnCreateComic}
          disabled={loading}
        />
      </Container>
    </Page>
  );
};

export default withAuth(CreateComicPage, { isAdmin: true });
