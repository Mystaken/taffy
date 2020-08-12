import { UpdateComicFormSubmission } from '../../../services/comics/update-comic';
import { FormArrayValue } from '../field-adder/types';

export interface UpdateComicFormProps {
  disabled?: boolean;
  onSubmit?: (values: UpdateComicFormSubmission) => void;
  comic: Comic;
}

export interface UpdateComicFormData {
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
