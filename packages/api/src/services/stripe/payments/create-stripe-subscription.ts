import { StripeClient } from '../client';
import { SubscriptionStatus } from '../../../models/subscription.model';
import { StripeError } from '../errors/StripeError';

export interface CreateStripeSubscriptionParams {
  customerId: string;
  token: string;
  items: { price: string }[];
}
export const createStripeSubscription = async ({
  customerId,
  token,
  items
}: CreateStripeSubscriptionParams) => {
  const customer = await StripeClient.customers.update(customerId, {
    source: token
  });

  const subscription = await StripeClient.subscriptions.create({
    customer: customer.id,
    items
  });

  if (subscription.status !== SubscriptionStatus.active) {
    await StripeClient.subscriptions.del(subscription.id);
    throw new StripeError();
  }

  return subscription;
};
