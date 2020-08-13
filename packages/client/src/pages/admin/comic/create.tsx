import React, { FunctionComponent } from 'react';
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

const useStyles = makeStyles(_ => ({
  container: {
    paddingTop: '10px'
  }
}));

const CreateComicPage: FunctionComponent = () => {
  const classes = useStyles();
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
        <CreateComicForm />
      </Container>
    </Page>
  );
};

export default withAuth(CreateComicPage, { isAdmin: true });
