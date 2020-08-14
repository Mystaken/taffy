import cookie from 'js-cookie';
import nextCookie from 'next-cookies';
import { NextPageContext } from 'next';

export const setCookie = cookie.set;

export const getCookie = (key: string, ctx?: NextPageContext) => {
  let strValue;
  if (ctx) {
    strValue = nextCookie(ctx)[key];
  } else {
    strValue = cookie.get(key);
  }
  return strValue;
};

export const getCookieJSON = <T>(key: string, ctx?: NextPageContext) => {
  const strValue = getCookie(key, ctx);
  try {
    return strValue ? (JSON.parse(strValue) as T) : null;
  } catch (e) {
    return null;
  }
};

export const removeCookie = cookie.remove;
