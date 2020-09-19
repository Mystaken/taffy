import { Comic, ComicModel, TComicModel } from '../../models/comic.model';
import { mapComic } from './map-comic';
import { FileEntry } from '../../models/file.model';

export interface NewComic {
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

export interface CreateComicOptions {
  userId?: string;
}

export const createComic = async (
  comic: NewComic,
  options?: CreateComicOptions
): Promise<Comic> => {
  const newComic = await new ComicModel(comic).save();
  const result: TComicModel = newComic.toJSON();
  return mapComic(result, options);
};
