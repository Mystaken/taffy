import { CreateComicIssueSubmission } from '../../../services/comics/issues/create-comic-issue';

export interface CreateComicIssueFormProps {
  disabled?: boolean;
  onSubmit?: (data: CreateComicIssueSubmission) => void;
}
