import {
  SubscriptionModel,
  Subscription
} from '../../models/subscription.model';
import { NotFoundError } from '../../errors/not-found.error';

export const deleteSubscription = async (subscriptionId: string) => {
  const document = await SubscriptionModel.findOneAndUpdate(
    { subscriptionId },
    { status: 'cancelled' },
    { new: true }
  ).exec();
  if (!document) {
    throw new NotFoundError('subscription');
  }
  return document.toJSON() as Subscription;
};
