import {
  Comic,
  ComicModel,
  ComicIssue,
  TComicModel
} from '../../../models/comic.model';
import { getComic } from '../get-comic';
import { BadRequestError } from '../../../errors/bad-request.error';
import { mapComic } from '../map-comic';
import { NotFoundError } from '../../../errors/not-found.error';

export interface UpdateComicIssueParams {
  comicId: string;
  issueNumber: number;
  issue: ComicIssue;
}

export const updateComicIssue = async ({
  comicId,
  issue,
  issueNumber
}: UpdateComicIssueParams): Promise<Comic> => {
  const result = await getComic({ id: comicId });
  const issues = result.issues;
  if (issueNumber > issues.length || issueNumber < 0) {
    throw new BadRequestError('Invalid issue number.');
  }
  issues[issueNumber] = issue;
  const comic = await ComicModel.findOneAndUpdate(
    { _id: comicId },
    { $set: { issues } },
    { new: true }
  ).exec();
  if (issueNumber > issues.length || issueNumber < 0) {
    throw new NotFoundError('comic');
  }
  return mapComic(comic?.toJSON() as TComicModel);
};
