import Router from 'koa-router';

import { membershipGetRouter } from './get';

const router = new Router();

router.use('/', membershipGetRouter.routes());

export const membershipRouter = router;
