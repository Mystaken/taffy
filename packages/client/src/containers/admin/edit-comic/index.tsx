import React, { FunctionComponent, useState } from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { EditComicForm as EditComicFormView } from '../../../components/forms/edit-comic-form';
import { useAsync } from '../../../hooks/async.hook';
import { getComicById } from '../../../services/comics/get-comic-by-id';
import {
  updateComic,
  UpdateComicFormSubmission
} from '../../../services/comics/update-comic';
import { CreateComicIssueForm } from '../../../components/forms/create-comic-issue';
import {
  createComicIssue,
  CreateComicIssueSubmission
} from '../../../services/comics/issues/create-comic-issue';
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
  const { value: comic, setValue: setComic } = useAsync(
    async () => getComicById(id),
    [id]
  );
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  if (!comic) {
    return null;
  }
  const handleOnUpdateComic = async (data: UpdateComicFormSubmission) => {
    setLoading(true);
    try {
      const newComic = await updateComic(comic.id, data);
      setComic(newComic);
    } finally {
      setLoading(false);
    }
  };

  const handleOnCreateIssue = async (data: CreateComicIssueSubmission) => {
    setLoading(true);
    try {
      const newComic = await createComicIssue(comic.id, data);
      setComic(newComic);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={classes.container}>
      <div className={classes.editComicContainer}>
        <EditComicFormView
          disabled={loading}
          comic={comic}
          onSubmit={handleOnUpdateComic}
        />
      </div>
      <Typography variant="h5" className={classes.issuesTitle}>
        Issues
      </Typography>
      <IssueViewer issues={comic.issues} />

      <Typography variant="h6" className={classes.addIssue}>
        Add Issue
      </Typography>
      <CreateComicIssueForm disabled={loading} onSubmit={handleOnCreateIssue} />
    </Container>
  );
};
