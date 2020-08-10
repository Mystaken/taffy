export interface IssueSelectorProps {
  issues: ComicIssue[];
  onIssueSelect?: (issue: ComicIssue, index: number) => void;
  isVIP?: boolean;
  onGetVIP?: () => void;
}
