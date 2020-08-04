import Router from 'koa-router';
import { authRouter } from './auth';

export const routes = async () => {
  const router = new Router();

  router.use('/auth', authRouter.routes());

  router.get('/', async ctx => {
    ctx.body = 'API Online';
  });

  return router;
};
