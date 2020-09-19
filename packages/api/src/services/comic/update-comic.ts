import { ComicModel, TComicModel } from '../../models/comic.model';
import { NotFoundError } from '../../errors/not-found.error';
import { mapComic } from './map-comic';
import { FileEntry } from '../../models/file.model';

export interface UpdateComic {
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  cardImage?: FileEntry;
  mobileCoverImage?: FileEntry;
  desktopBackgroundImage?: FileEntry;
  desktopForegroundImage?: FileEntry;
  bannerImage?: FileEntry;
}
export interface UpdateComicOptions {
  userId?: string;
}

export const updateComic = async (
  id: string,
  newComic: UpdateComic,
  options?: UpdateComicOptions
) => {
  try {
    const document = await ComicModel.findByIdAndUpdate(id, newComic, {
      new: true
    }).exec();
    if (!document) {
      throw new NotFoundError('comic');
    }
    const comic: TComicModel = document.toJSON();
    return mapComic(comic, options);
  } catch (e) {
    throw new NotFoundError('comic');
  }
};
