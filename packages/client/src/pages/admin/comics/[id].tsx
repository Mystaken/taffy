import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

import { Page } from '../../../components/layouts/page';
import { EditComicForm } from '../../../containers/admin/edit-comic';
import { withAuth } from '../../../containers/common/with-auth';

const AdminComicPage: FunctionComponent = () => {
  const router = useRouter();
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
      {comicId && <EditComicForm id={comicId} />}
    </Page>
  );
};

export default withAuth(AdminComicPage, { isAdmin: true });
