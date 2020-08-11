import Router from 'koa-router';

import { membershipGetRouter } from './get';
import { membershipPostRouter } from './post';

const router = new Router();

router.use('/', membershipGetRouter.routes());
router.use('/', membershipPostRouter.routes());

export const membershipRouter = router;
