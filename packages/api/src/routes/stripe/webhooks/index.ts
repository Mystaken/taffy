import Router from 'koa-router';
import Stripe from 'stripe';

import { constructEvent } from '../../../services/stripe/webhooks/construct-event';
import { BadRequestError } from '../../../errors/bad-request.error';
import { StripeEvents } from './events';
import { customerDeletedEvent } from './handlers/customer/deleted';
import { subscriptionsDeletedEvent } from './handlers/subscriptions/deleted';

const router = new Router();

router.post('/', async ctx => {
  const stripeHeaders = ctx.request.headers['stripe-signature'];
  let event: Stripe.Event;
  try {
    event = constructEvent(ctx.request.rawBody, stripeHeaders);
  } catch (err) {
    throw new BadRequestError('Could not parse stripe request.');
  }
  switch (event.type) {
    // Customer events
    case StripeEvents.customerDeleted:
      await customerDeletedEvent(event);
      break;

    // Subscription Events
    case StripeEvents.subscriptionDeleted:
      await subscriptionsDeletedEvent(event);
      break;
  }
  ctx.body = 'success';
});

export const stripeWebhooksRouter = router;
