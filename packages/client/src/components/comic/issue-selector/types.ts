export interface IssueSelectorProps {
  issues: ComicIssue[];
  onIssueSelect?: (issue: ComicIssue, index: number) => void;
  isVip?: boolean;
  onGetVIP?: () => void;
}
