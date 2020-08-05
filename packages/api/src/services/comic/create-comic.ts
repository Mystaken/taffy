import { Comic, ComicModel, TComicModel } from '../../models/comic.model';
import { mapComic } from './map-comic';

export interface NewComic {
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  coverImage?: string;
  mobileCoverImage?: string;
  desktopCoverImage?: string;
  comicBannerImage?: string;
}

export const createComic = async (comic: NewComic): Promise<Comic> => {
  const newComic = await new ComicModel(comic).save();
  const result: TComicModel = newComic.toJSON();
  return mapComic(result);
};
