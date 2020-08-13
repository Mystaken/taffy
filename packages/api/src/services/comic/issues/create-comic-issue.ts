import {
  Comic,
  ComicModel,
  TComicModel,
  TComicIssueModel
} from '../../../models/comic.model';
import { mapComic } from '../map-comic';
import { NotFoundError } from '../../../errors/not-found.error';
import { CreateComicOptions } from '../create-comic';

export interface CreateComicIssueOptions {
  userId?: string;
}

export const createComicIssue = async (
  comicId: string,
  issue: TComicIssueModel,
  options?: CreateComicOptions
): Promise<Comic> => {
  const comic = await ComicModel.findOneAndUpdate(
    { _id: comicId },
    { $push: { issues: issue } },
    { new: true }
  ).exec();
  if (!comic) {
    throw new NotFoundError('comic');
  }
  return mapComic(comic.toJSON() as TComicModel, options);
};
