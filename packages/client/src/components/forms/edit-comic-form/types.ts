import { UpdateComicFormSubmission } from '../../../services/comic/update-comic';

export interface UpdateComicFormProps {
  disabled?: boolean;
  onSubmit?: (values: UpdateComicFormSubmission) => void;
  comic: Comic;
}

export interface FormArrayValue {
  value: string;
}

export interface FieldAdderProps {
  register: (...args: any[]) => any;
  control: any;
  fieldName: string;
  label: string;
  disabled?: boolean;
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
