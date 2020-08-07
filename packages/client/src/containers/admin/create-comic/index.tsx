import React, { FunctionComponent } from 'react';
import { CreateComicForm as CreateComicFormView } from '../../../components/forms/create-comic-form';
import { createComic } from '../../../services/comic/comic.service';

export const CreateComicForm: FunctionComponent = () => {
  return <CreateComicFormView onSubmit={data => createComic(data)} />;
};
