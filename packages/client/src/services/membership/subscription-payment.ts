import { authHeader } from '../auth';
import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';

export const subscriptionPayment = async (stripeToken: string) => {
  const headers = authHeader();

  const { response } = await comicAPI
    .post(`membership`, {
      headers,
      json: {
        stripeToken
      }
    })
    .json<ComicAPISuccessResponse<Subscription>>();
  return response;
};
