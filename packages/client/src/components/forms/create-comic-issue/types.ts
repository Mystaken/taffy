import { CreateComicIssueSubmission } from '../../../services/comic/issues/create-comic-issue';

export interface CreateComicIssueFormProps {
  disabled?: boolean;
  onSubmit?: (data: CreateComicIssueSubmission) => void;
}
