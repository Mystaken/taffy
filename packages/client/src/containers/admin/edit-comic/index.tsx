import React, { FunctionComponent } from 'react';
import { EditComicForm as EditComicFormView } from '../../../components/forms/edit-comic-form';
import { createComic } from '../../../services/comic/create-comic';
import { useAsync } from '../../../hooks/async.hook';

export interface EditComicFormProps {
  id: string;
}

export const EditComicForm: FunctionComponent = ({ id }) => {
  const comic = useAsync(() => )
  return <div></div>;
};
