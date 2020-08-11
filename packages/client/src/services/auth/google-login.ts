import { ComicAPISuccessResponse, comicAPI } from '../../api/comic.api';
import { setUser } from './user-cookie';

export const googleLogin = async (idToken: string) => {
  const { response } = await comicAPI
    .post('auth/google', {
      json: { idToken }
    })
    .json<ComicAPISuccessResponse<SessionUser>>();

  setUser(response);
  return response;
};
