import React, { FunctionComponent } from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { EditComicForm as EditComicFormView } from '../../../components/forms/edit-comic-form';
import { useAsync } from '../../../hooks/async.hook';
import { getComicById } from '../../../services/comic/get-comic-by-id';
import { updateComic } from '../../../services/comic/update-comic';
import { CreateComicIssueForm } from '../../../components/forms/create-comic-issue';
import { createComicIssue } from '../../../services/comic/issues/create-comic-issue';
import { IssueViewer } from '../../../components/comic/issue-viewer';

export interface EditComicFormProps {
  id: string;
}
const useStyles = makeStyles(_ => ({
  editComicContainer: { paddingBottom: '24px' },
  issuesTitle: { paddingBottom: '24px' },
  container: {
    paddingTop: '10px'
  },
  addIssue: { paddingTop: '24px' }
}));
export const EditComicForm: FunctionComponent<EditComicFormProps> = ({
  id
}) => {
  const [comic] = useAsync<Comic>(() => getComicById(id), [id]);
  const classes = useStyles();
  if (!comic) {
    return null;
  }
  return (
    <Container className={classes.container}>
      <div className={classes.editComicContainer}>
        <EditComicFormView
          comic={comic}
          onSubmit={data => updateComic(comic.id, data)}
        />
      </div>
      <Typography variant="h5" className={classes.issuesTitle}>
        Issues
      </Typography>
      <IssueViewer issues={comic.issues} />

      <Typography variant="h6" className={classes.addIssue}>
        Add Issue
      </Typography>
      <CreateComicIssueForm
        onSubmit={data => createComicIssue(comic.id, data)}
      />
    </Container>
  );
};
