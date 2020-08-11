import Router from 'koa-router';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { MembershipPostRequestBoy, membershipPostSchema } from './schema';
import { User } from '../../../models/user.model';
import { UnAuthorizedError } from '../../../errors/unauthorized.error';
import { taffyMonthlySubscription } from '../../../services/stripe/items.json';
import { createSubscription } from '../../../services/subscriptions/create-subscription';
import { setUserVIPStatus } from '../../../services/users/subscriptions';

const router = new Router();

router.post('/', async ctx => {
  const user: User | undefined = ctx.state.user;
  if (!user) {
    throw new UnAuthorizedError();
  }
  const body = await validateRequestPayload<MembershipPostRequestBoy>(
    ctx.request.body,
    membershipPostSchema
  );

  const subscription = await createSubscription({
    user,
    token: body.stripeToken,
    items: [
      {
        price: taffyMonthlySubscription.pricing
      }
    ]
  });

  await setUserVIPStatus(user.id, true);

  ctx.body = subscription;
});

export const membershipPostRouter = router;
