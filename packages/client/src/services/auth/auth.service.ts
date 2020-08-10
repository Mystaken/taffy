import {
  setCookie,
  removeCookie,
  getCookieJSON,
  getCookie
} from '../cookie.service';
import { ComicAPISuccessResponse, comicAPI } from '../../api/comic.api';
import { NextPageContext } from 'next';

const AUTH_TOKEN = 'auth_token';
const USER_TOKEN = 'current_user';

const setUser = (token: string, user: User) => {
  setCookie(AUTH_TOKEN, token, { expires: 1 });
  setCookie(USER_TOKEN, JSON.stringify(user), {
    expires: 1
  });
};
export const getCurrentUser = (ctx?: NextPageContext) => {
  const user = getCookieJSON<User>(USER_TOKEN, ctx);
  const token = getCookie(AUTH_TOKEN, ctx);
  return user && token ? { user, token } : null;
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
    .post('auth/signup', { json: details })
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
      json: { idToken }
    })
    .json<ComicAPISuccessResponse<SessionUser>>();

  setUser(jwt, user);
  return user;
};

export const facebookLogin = async (accessToken: string) => {
  const {
    response: { jwt, ...user }
  } = await comicAPI
    .post('auth/facebook', {
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
