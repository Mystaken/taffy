import { getComic } from '../get-comic';
import { ComicModel, TComicModel } from '../../../models/comic.model';
import { mapComic } from '../map-comic';
import { NotFoundError } from '../../../errors/not-found.error';

export const addUserRating = async (
  comicId: string,
  userId: string,
  rating: number
) => {
  const comic = await ComicModel.findByIdAndUpdate(
    comicId,
    {
      $set: {
        [`ratings.${userId}`]: rating
      }
    },
    { new: true }
  );
  if (!comic) {
    throw new NotFoundError('comic');
  }
  return mapComic(comic.toJSON() as TComicModel);
};
