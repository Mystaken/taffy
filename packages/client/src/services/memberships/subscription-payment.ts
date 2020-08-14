import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';
import { setUser } from '../auth/user-cookie';

export interface SubscriptionPayment {
  subscription: Subscription;
  user: SessionUser;
}

export const subscriptionPayment = async (stripeToken: string) => {
  const { response } = await comicAPI
    .post('memberships', {
      json: {
        stripeToken
      }
    })
    .json<ComicAPISuccessResponse<SubscriptionPayment>>();
  setUser(response.user);
  return response;
};
