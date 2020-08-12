import Router from 'koa-router';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { MembershipGetRequestQueryParam, membershipGetSchema } from './schema';
import { taffyMonthlySubscription } from '../../../services/stripe/items.json';
import { StripeClient } from '../../../services/stripe/client';

const router = new Router();

router.get('/', async ctx => {
  await validateRequestPayload<MembershipGetRequestQueryParam>(
    ctx.request.query,
    membershipGetSchema
  );
  const price = await StripeClient.prices.retrieve(
    taffyMonthlySubscription.pricing
  );
  ctx.body = {
    productId: price.product,
    priceId: price.id,
    currency: price.currency,
    recurring: price.recurring && {
      interval: price.recurring.interval,
      intervalCount: price.recurring.interval_count
    },
    unitAmount: price.unit_amount
  };
});

export const membershipGetRouter = router;
