import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';
import { setUser } from './user-cookie';

export const facebookLogin = async (accessToken: string) => {
  const { response } = await comicAPI
    .post('auth/facebook', {
      json: { accessToken }
    })
    .json<ComicAPISuccessResponse<SessionUser>>();

  setUser(response);
  return response;
};
