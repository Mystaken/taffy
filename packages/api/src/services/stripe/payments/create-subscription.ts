import { StripeClient } from '../client';

export interface CreateSubscriptionParams {
  customerId: string;
  token: string;
  items: { price: string }[];
}
export const createSubscription = async ({
  customerId,
  token,
  items
}: CreateSubscriptionParams) => {
  const customer = await StripeClient.customers.update(customerId, {
    source: token
  });
  const subscription = await StripeClient.subscriptions.create({
    customer: customer.id,
    items
  });
  return subscription;
};
