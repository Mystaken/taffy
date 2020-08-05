import { TComicModel, Comic, ComicModel } from '../../models/comic.model';
import { mapComic } from './map-comic';
import { formAggregateMatcher } from '../../utils/api/form-aggregate-matcher';

export interface QueryComicParams extends Partial<Pick<TComicModel, 'title'>> {
  id?: string;
}

export const queryComicEntry = async (
  params: QueryComicParams
): Promise<Comic[]> => {
  const comics: TComicModel[] = await ComicModel.aggregate<TComicModel>([
    {
      $match: {
        ...formAggregateMatcher('and', params)
      }
    }
  ]).exec();

  return comics.map(mapComic);
};
