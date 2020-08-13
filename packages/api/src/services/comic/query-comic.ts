import { TComicModel, Comic, ComicModel } from '../../models/comic.model';
import { mapComic } from './map-comic';

export interface QueryComicParams extends Partial<Pick<TComicModel, 'title'>> {
  id?: string;
}

export interface QueryComicOptions {
  userId?: string;
}

export const queryComicEntry = async (
  params: QueryComicParams,
  options?: QueryComicOptions
): Promise<Comic[]> => {
  const documents = await ComicModel.find(params).exec();

  const comics = documents.map(d => mapComic(d.toJSON(), options));
  return comics;
};
