import { Comic } from '../../models/comic.model';
import { ComicMembership } from '../../models/types';

export const stripVipIssues = ({ issues, ...comic }: Comic): Comic => ({
  ...comic,
  issues: issues.map(({ pages, ...issue }) => {
    if (issue.membership === ComicMembership.vip) {
      return issue;
    }
    return { pages, ...issue };
  })
});
