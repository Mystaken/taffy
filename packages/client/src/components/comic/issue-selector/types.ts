export interface IssueSelectorProps {
  issues: ComicIssueMeta[];
  onIssueSelect?: (issue: ComicIssueMeta, index: number) => void;
  isVIP?: boolean;
  onGetVIP?: () => void;
}
