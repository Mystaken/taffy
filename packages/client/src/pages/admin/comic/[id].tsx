import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

import { Page } from '../../../components/layouts/page';
import { useRouter } from 'next/router';
import { EditComicForm } from '../../../containers/admin/edit-comic';

const AdminComicPage: FunctionComponent = () => {
  const router = useRouter();
  const comicId = router.query.id as string;
  console.log(comicId);
  return (
    <Page>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="secondary">
            Edit Comic
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div>{comicId}</div>
        {comicId && <EditComicForm id={comicId} />}
      </Container>
    </Page>
  );
};

export default AdminComicPage;
