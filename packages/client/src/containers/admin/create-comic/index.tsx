import React, { FunctionComponent } from 'react';
import { CreateComicForm as CreateComicFormView } from '../../../components/forms/create-comic-form';
import {
  createComic,
  CreateComicFormSubmission
} from '../../../services/comics/create-comic';

export interface CreateComicFormProps {
  onCreateComic?: (comic: Comic) => void;
  disabled?: boolean;
}

export const CreateComicForm: FunctionComponent<CreateComicFormProps> = ({
  onCreateComic,
  disabled
}) => {
  const handleOnSubmit = async (values: CreateComicFormSubmission) => {
    const comic = await createComic(values);
    onCreateComic?.(comic);
  };
  return <CreateComicFormView onSubmit={handleOnSubmit} disabled={disabled} />;
};
