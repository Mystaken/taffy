import ky from 'ky-universal';
import { config } from '../../config';
import { getCurrentUser } from '../services/auth/user-cookie';

export interface ComicAPIResponse {
  version: string;
  status: number;
}

export interface ComicAPISuccessResponse<T> extends ComicAPIResponse {
  response: T;
}

export interface ComicAPIErrorResponse extends ComicAPIResponse {
  errors: any[];
}
export const comicAPI = ky.extend({
  prefixUrl: `${config.API_DOMAIN}${config.API_BASE_URL}`,
  hooks: {
    beforeRequest: [
      request => {
        const user = getCurrentUser();
        if (user) {
          request.headers.set('Authorization', `Bearer ${user.jwt}`);
        }
      }
    ]
  }
});
