import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';

export const getAllComics = async () => {
  const { response } = await comicAPI
    .get('comic')
    .json<ComicAPISuccessResponse<Comic[]>>();
  return response;
};
