import Stripe from 'stripe';
import { StripeEvents } from '../../events';
import { BadRequestError } from '../../../../../errors/bad-request.error';
import { deleteSubscription } from '../../../../../services/subscriptions/delete-subscription';
import { setCustomerVIPStatus } from '../../../../../services/users/subscriptions';

export const subscriptionsDeletedEvent = async (event: Stripe.Event) => {
  if (event.type !== StripeEvents.subscriptionDeleted) {
    throw new BadRequestError(
      `Invalid request type. Expected: ${StripeEvents.subscriptionDeleted} Got: ${event.type}`
    );
  }
  const eventObj: any = event.data.object;
  console.log(event);
  const subscriptionId: string = eventObj.id;
  const customerId: string = eventObj.customer;

  const subscription = await deleteSubscription(subscriptionId);
  await setCustomerVIPStatus(customerId, false);

  return subscription;
};
