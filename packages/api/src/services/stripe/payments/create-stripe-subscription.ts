import { StripeClient } from '../client';

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
  return subscription;
};
