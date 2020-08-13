import { comicAPI, ComicAPISuccessResponse } from '../../../api/comic.api';

export const addComicRating = async (comicId: string, rating: number) => {
  const { response } = await comicAPI
    .post(`comics/${comicId}/ratings`, {
      json: {
        rating
      }
    })
    .json<ComicAPISuccessResponse<Comic>>();
  return response;
};
