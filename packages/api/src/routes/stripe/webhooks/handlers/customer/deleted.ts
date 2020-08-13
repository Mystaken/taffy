import Stripe from 'stripe';
import { StripeEvents } from '../../events';
import { BadRequestError } from '../../../../../errors/bad-request.error';
import { deleteUserByCustomerId } from '../../../../../services/users/delete-user';

export const customerDeletedEvent = async (event: Stripe.Event) => {
  if (event.type !== StripeEvents.customerDeleted) {
    throw new BadRequestError(
      `Invalid request type. Expected: ${StripeEvents.customerDeleted} Got: ${event.type}`
    );
  }
  const eventObj: any = event.data.object;
  const customerId: string = eventObj.id;
  const user = await deleteUserByCustomerId(customerId);
  return user;
};
