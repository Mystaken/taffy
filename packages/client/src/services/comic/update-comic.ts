import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';

export interface UpdateComicFormSubmission {
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

export const updateComic = async (data: UpdateComicFormSubmission) => {
  const form = new FormData();
  Object.entries(data).forEach(([k, v]) => {
    form.append(k, v);
  });
  const { response } = await comicAPI
    .post('comic', {
      body: form
    })
    .json<ComicAPISuccessResponse<Comic>>();
  return response;
};
