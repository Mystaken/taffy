import {
  Comic,
  ComicModel,
  ComicIssue,
  TComicModel
} from '../../../models/comic.model';
import { mapComic } from '../map-comic';
import { NotFoundError } from '../../../errors/not-found.error';

export interface CreateComicIssueParams {
  comicId: string;
  issue: ComicIssue;
}

export const createComicIssue = async ({
  comicId,
  issue
}: CreateComicIssueParams): Promise<Comic> => {
  const comic = await ComicModel.findOneAndUpdate(
    { _id: comicId },
    { $push: { issues: issue } },
    { new: true }
  ).exec();
  if (!comic) {
    throw new NotFoundError('comic');
  }
  return mapComic(comic.toJSON() as TComicModel);
};
