import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';

export const getComicById = async (id: string) => {
  const { response } = await comicAPI
    .get(`comic/${id}`)
    .json<ComicAPISuccessResponse<Comic>>();
  return response;
};
