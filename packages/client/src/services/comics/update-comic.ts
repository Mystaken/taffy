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

export const updateComic = async (
  id: string,
  data: UpdateComicFormSubmission
) => {
  const form = new FormData();
  Object.entries(data).forEach(([k, v]) => {
    form.append(k, v);
  });
  const { response } = await comicAPI
    .post(`comic/${id}`, {
      body: form
    })
    .json<ComicAPISuccessResponse<Comic>>();
  return response;
};
