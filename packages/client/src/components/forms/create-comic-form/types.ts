import { CreateComicFormSubmission } from '../../../services/comic/comic.service';

export interface CreateComicFormProps {
  disabled?: boolean;
  onSubmit?: (values: CreateComicFormSubmission) => void;
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
