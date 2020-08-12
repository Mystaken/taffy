import Router from 'koa-router';
import { authRouter } from './auth';
import { comicRouter } from './comics';
import { membershipRouter } from './memberships';

export const routes = async () => {
  const router = new Router();

  router.use('/auth', authRouter.routes());
  router.use('/comics', comicRouter.routes());
  router.use('/memberships', membershipRouter.routes());

  router.get('/', async ctx => {
    ctx.body = 'API Online';
  });

  return router;
};
