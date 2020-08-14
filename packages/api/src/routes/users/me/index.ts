import Router from 'koa-router';
import { getUserFromCtx } from '../../../services/users/get-user';

const router = new Router();

router.get('/', async ctx => {
  const user = await getUserFromCtx(ctx);
  ctx.body = user;
});

export const currentUserRouter = router;
