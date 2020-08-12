import { ComicAPISuccessResponse, comicAPI } from '../../api/comic.api';
import { setUser } from './user-cookie';

export interface SignupDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signup = async (details: SignupDetails): Promise<SessionUser> => {
  const { response } = await comicAPI
    .post('auth/signup', { json: details })
    .json<ComicAPISuccessResponse<SessionUser>>();
  setUser(response);
  return response;
};
