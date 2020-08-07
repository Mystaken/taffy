import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

import { Page } from '../../../components/layouts/page';
import { CreateComicForm } from '../../../containers/admin/create-comic';

const CreateComicPage: FunctionComponent = () => {
  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="secondary">
            Create Comic
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <CreateComicForm />
      </Container>
    </Page>
  );
};

export default CreateComicPage;
