import Router from 'koa-router';
import { authRouter } from './auth';
import { comicsRouter } from './comics';
import { membershipRouter } from './memberships';
import { stripeRouter } from './stripe';

export const routes = async () => {
  const router = new Router();

  router.use('/auth', authRouter.routes());
  router.use('/comics', comicsRouter.routes());
  router.use('/memberships', membershipRouter.routes());
  router.use('/stripe', stripeRouter.routes());
  router.get('/', async ctx => {
    ctx.body = 'API Online';
  });

  return router;
};
