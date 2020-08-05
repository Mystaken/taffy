import { ComicModel, TComicModel, Comic } from '../../models/comic.model';
import { NotFoundError } from '../../errors/not-found.error';

export interface GetComicParams extends Partial<Pick<TComicModel, 'title'>> {
  id: string;
}

export const getComic = async (params: GetComicParams): Promise<Comic> => {
  const document = await ComicModel.findOne({
    _id: params.id
  }).exec();

  if (!document) {
    throw new NotFoundError('comic');
  }
  const comic: TComicModel = document.toJSON();
  return comic;
};
