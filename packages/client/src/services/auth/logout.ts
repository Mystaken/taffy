import { removeCookie } from '../cookie.service';
import { USER_TOKEN } from './user-cookie';

export const logout = () => {
  removeCookie(USER_TOKEN);
};
