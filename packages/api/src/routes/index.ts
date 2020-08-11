import Router from 'koa-router';
import { authRouter } from './auth';
import { comicRouter } from './comic';
import { membershipRouter } from './membership';

export const routes = async () => {
  const router = new Router();

  router.use('/auth', authRouter.routes());
  router.use('/comic', comicRouter.routes());
  router.use('/membership', membershipRouter.routes());

  router.get('/', async ctx => {
    ctx.body = 'API Online';
  });

  return router;
};
