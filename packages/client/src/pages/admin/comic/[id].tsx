import React, { FunctionComponent } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles
} from '@material-ui/core';

import { Page } from '../../../components/layouts/page';
import { useRouter } from 'next/router';
import { EditComicForm } from '../../../containers/admin/edit-comic';

const useStyles = makeStyles(_ => ({
  container: {
    paddingTop: '10px'
  }
}));

const AdminComicPage: FunctionComponent = () => {
  const router = useRouter();
  const classes = useStyles();
  const comicId = router.query.id as string;

  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="secondary">
            Edit Comic
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        {comicId && <EditComicForm id={comicId} />}
      </Container>
    </Page>
  );
};

export default AdminComicPage;
