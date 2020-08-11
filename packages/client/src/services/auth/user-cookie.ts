import { NextPageContext } from 'next';

import { setCookie, getCookieJSON } from '../cookie.service';

export const USER_TOKEN = 'taffy_comic_current_user';

export const setUser = (user: SessionUser) => {
  setCookie(USER_TOKEN, JSON.stringify(user), {
    expires: 1
  });
};

export const getCurrentUser = (ctx?: NextPageContext) => {
  const user = getCookieJSON<SessionUser>(USER_TOKEN, ctx);
  return user;
};
