import { createStripeSubscription } from '../stripe/payments/create-stripe-subscription';
import { User } from '../../models/user.model';
import {
  TSubscriptionModel,
  Subscription,
  SubscriptionModel,
  SubscriptionStatus
} from '../../models/subscription.model';

export const createSubscriptionObject = async (
  newSubscription: TSubscriptionModel
): Promise<Subscription> => {
  const document = await new SubscriptionModel(newSubscription).save();
  const subscription = document.toJSON();
  return subscription;
};

export interface CreateSubscriptionParams {
  user: User;
  token: string;
  items: { price: string }[];
}

export const createSubscription = async ({
  user,
  token,
  items
}: CreateSubscriptionParams) => {
  const stripeSubscription = await createStripeSubscription({
    customerId: user.customerId,
    token,
    items
  });

  const subscription = await createSubscriptionObject({
    subscriptionId: stripeSubscription.id,
    customerId: user.customerId,
    userId: user.id,
    status: stripeSubscription.status as SubscriptionStatus
  });

  return subscription;
};
