import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';

export interface CreateComicFormSubmission {
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  coverImage?: File;
  desktopCoverImage?: File;
  mobileCoverImage?: File;
  comicBannerImage?: File;
}

export const createComic = async (data: CreateComicFormSubmission) => {
  const form = new FormData();
  Object.entries(data).forEach(([k, v]) => {
    form.append(k, v);
  });
  const { response } = await comicAPI
    .post('comics', {
      body: form
    })
    .json<ComicAPISuccessResponse<Comic>>();
  return response;
};
