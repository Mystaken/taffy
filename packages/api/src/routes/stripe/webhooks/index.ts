import Router from 'koa-router';

const router = new Router();

router.post('/', async ctx => {
  console.log('HERE');
  console.log(ctx.request.body);
  ctx.body = 'success';
});
export const stripeWebhooksRouter = router;
