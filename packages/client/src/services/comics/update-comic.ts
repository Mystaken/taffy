import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';

export interface UpdateComicFormSubmission {
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  cardImage?: File;
  mobileCoverImage?: File;
  desktopBackgroundImage?: File;
  desktopForegroundImage?: File;
  bannerImage?: File;
}

export const updateComic = async (
  id: string,
  data: UpdateComicFormSubmission
) => {
  const form = new FormData();
  Object.entries(data).forEach(([k, v]) => {
    form.append(k, v);
  });
  const { response } = await comicAPI
    .post(`comics/${id}`, {
      body: form
    })
    .json<ComicAPISuccessResponse<Comic>>();
  return response;
};
