import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';

export const subscriptionPayment = async (stripeToken: string) => {
  const { response } = await comicAPI
    .post('memberships', {
      json: {
        stripeToken
      }
    })
    .json<ComicAPISuccessResponse<Subscription>>();
  return response;
};
