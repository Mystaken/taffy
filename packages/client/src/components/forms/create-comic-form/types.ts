import { CreateComicFormSubmission } from '../../../services/comics/create-comic';
import { FormArrayValue } from '../field-adder/types';

export interface CreateComicFormProps {
  disabled?: boolean;
  onSubmit?: (values: CreateComicFormSubmission) => void;
}

export interface CreateComicFormData {
  title: string;
  description: string;
  genres: FormArrayValue[];
  categories: FormArrayValue[];
  authors: FormArrayValue[];
  coverImage: FileList;
  desktopCoverImage: FileList;
  mobileCoverImage: FileList;
  comicBannerImage: FileList;
}
