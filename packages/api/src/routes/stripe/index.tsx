import Router from 'koa-router';
import { stripeWebhooksRouter } from './webhooks';

const router = new Router();

router.use('/webhooks', stripeWebhooksRouter.routes());

export const stripeRouter = router;
