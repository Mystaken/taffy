import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';
import { setUser } from './user-cookie';

export interface LoginDetails {
  email: string;
  password: string;
}

export const login = async (details: LoginDetails): Promise<User> => {
  const { response } = await comicAPI
    .post('auth/login', { json: details })
    .json<ComicAPISuccessResponse<SessionUser>>();

  setUser(response);
  return response;
};
