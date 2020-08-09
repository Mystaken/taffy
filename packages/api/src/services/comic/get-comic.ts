import { ComicModel, TComicModel, Comic } from '../../models/comic.model';
import { NotFoundError } from '../../errors/not-found.error';
import { mapComic } from './map-comic';

export interface GetComicParams {
  id: string;
}

export const getComic = async ({
  id
}: GetComicParams): Promise<TComicModel> => {
  try {
    const document = await ComicModel.findById(id).exec();

    if (!document) {
      throw new NotFoundError('comic');
    }
    const comic: TComicModel = document.toJSON();
    return comic;
  } catch (e) {
    throw new NotFoundError('comic');
  }
};

export const getComicEntry = async (params: GetComicParams): Promise<Comic> => {
  const comic = await getComic(params);
  return mapComic(comic);
};
