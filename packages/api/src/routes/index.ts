import Router from 'koa-router';
import { authRouter } from './auth';
import { comicRouter } from './comic';

export const routes = async () => {
  const router = new Router();

  router.use('/auth', authRouter.routes());
  router.use('/comic', comicRouter.routes());

  router.get('/', async ctx => {
    console.log(ctx.state);
    ctx.body = 'API Online';
  });

  return router;
};
