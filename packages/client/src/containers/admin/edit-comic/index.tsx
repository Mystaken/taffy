import React, { FunctionComponent } from 'react';
import { EditComicForm as EditComicFormView } from '../../../components/forms/edit-comic-form';
import { createComic } from '../../../services/comic/create-comic';
import { useAsync } from '../../../hooks/async.hook';
import { getComicById } from '../../../services/comic/get-comic-by-id';
import { updateComic } from '../../../services/comic/update-comic';

export interface EditComicFormProps {
  id: string;
}

export const EditComicForm: FunctionComponent<EditComicFormProps> = ({
  id
}) => {
  const [comic] = useAsync(() => getComicById(id), []);
  if (!comic) {
    return null;
  }
  return (
    <EditComicFormView
      comic={comic}
      onSubmit={data => updateComic(comic.id, data)}
    />
  );
};
