import { setCookie, removeCookie } from '../cookie.service';
import { ComicAPISuccessResponse, comicAPI } from '../../api/comic.api';

const AUTH_TOKEN = 'auth_token';
const USER_TOKEN = 'current_user';

const setUser = (token: string, user: User) => {
  setCookie(AUTH_TOKEN, token, { expires: 1 });
  setCookie(USER_TOKEN, JSON.stringify(user), {
    expires: 1
  });
};

export interface SignupDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signup = async (details: SignupDetails): Promise<User> => {
  const {
    response: { jwt, ...user }
  } = await comicAPI
    .post('auth/signup', { json: { ...details, reg_type: '1' } })
    .json<ComicAPISuccessResponse<SessionUser>>();
  setUser(jwt, user);
  return user;
};

export interface LoginDetails {
  email: string;
  password: string;
}

export const login = async (details: LoginDetails): Promise<User> => {
  const {
    response: { jwt, ...user }
  } = await comicAPI
    .post('auth/login', { json: details })
    .json<ComicAPISuccessResponse<SessionUser>>();

  setUser(jwt, user);
  return user;
};

export const googleLogin = async (idToken: string) => {
  const {
    response: { jwt, ...user }
  } = await comicAPI
    .post('auth/google', {
      json: { idToken, reg_type: '3' }
    })
    .json<ComicAPISuccessResponse<SessionUser>>();

  setUser(jwt, user);
  return user;
};

export const facebookLogin = async (accessToken: string) => {
  const {
    response: { jwt, ...user }
  } = await comicAPI
    .post('api/user-register', {
      json: { accessToken }
    })
    .json<ComicAPISuccessResponse<SessionUser>>();

  setUser(jwt, user);
  return user;
};

export const logout = () => {
  removeCookie(AUTH_TOKEN);
  removeCookie(USER_TOKEN);
};
