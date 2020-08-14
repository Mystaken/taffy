import Router from 'koa-router';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { MembershipPostRequestBoy, membershipPostSchema } from './schema';
import { UnAuthorizedError } from '../../../errors/unauthorized.error';
import { taffyMonthlySubscription } from '../../../services/stripe/items.json';
import { createSubscription } from '../../../services/subscriptions/create-subscription';
import { setUserVIPStatus } from '../../../services/users/subscriptions';
import { BadRequestError } from '../../../errors/bad-request.error';
import { isVipUser } from '../../../services/users/privileges';
import { getUserFromCtx } from '../../../services/users/get-user';

const router = new Router();

router.post('/', async ctx => {
  const user = await getUserFromCtx(ctx);
  if (!user) {
    throw new UnAuthorizedError();
  }
  if (await isVipUser(user)) {
    throw new BadRequestError('User already has membership');
  }
  const body = await validateRequestPayload<MembershipPostRequestBoy>(
    ctx.request.body,
    membershipPostSchema
  );
  try {
    const subscription = await createSubscription({
      user,
      token: body.stripeToken,
      items: [
        {
          price: taffyMonthlySubscription.pricing
        }
      ]
    });

    const newUser = await setUserVIPStatus(user.id, true);
    ctx.body = { subscription, user: newUser };
  } catch (e) {
    throw new BadRequestError('Payment failed');
  }
});

export const membershipPostRouter = router;
