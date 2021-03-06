import { getComicEntry } from './get-comic';
import { ComicIssue } from '../../models/comic.model';
import { NotFoundError } from '../../errors/not-found.error';

export interface GetComicIssueParams {
  comicId: string;
  issueNumber: number;
}

export const getComicIssue = async ({
  comicId,
  issueNumber
}: GetComicIssueParams): Promise<ComicIssue> => {
  try {
    const comic = await getComicEntry({ id: comicId });
    const issues = comic.issues;
    if (issueNumber > comic.issues.length) {
      throw new NotFoundError('comic issue');
    }
    return issues[issueNumber];
  } catch (e) {
    throw new NotFoundError('comic issue');
  }
};
