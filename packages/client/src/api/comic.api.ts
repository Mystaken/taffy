import ky from 'ky-universal';
import { config } from '../../config';

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
  prefixUrl: `${config.API_DOMAIN}${config.API_BASE_URL}`
});
