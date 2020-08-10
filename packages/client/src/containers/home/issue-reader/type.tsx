export interface ComicReaderProps {
  issues: ComicIssue[];
  initialIssue: number;
  onGetVIP?: () => void;
}
